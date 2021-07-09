import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { REGISTER_URL, LOGIN_URL, LOGOUT_URL, USER_INFO_URL, REFRESH_TOKEN_URL } from '../../constants/api';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';

const initialState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
};

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const setCookies = (payload) => {
  const accessToken = payload.accessToken.split('Bearer ')[1];
  const refreshToken = payload.refreshToken;
  setCookie('accessToken', accessToken);
  setCookie('refreshToken', refreshToken);
};

export const registerRequest = createAsyncThunk('user/registerRequest', async (payload) => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(REGISTER_URL, fetchSettings);
  return await checkResponse(response);
});

export const loginRequest = createAsyncThunk('user/loginRequest', async (payload) => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(LOGIN_URL, fetchSettings);
  return await checkResponse(response);
});

export const logoutRequest = createAsyncThunk('user/logoutRequest', async () => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: getCookie('refreshToken') }),
  };

  const response = await fetch(LOGOUT_URL, fetchSettings);
  return await checkResponse(response);
});

export const refreshTokenRequest = async () => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('refreshToken'),
    },
    body: JSON.stringify({ token: getCookie('refreshToken') }),
  };

  const response = await fetch(REFRESH_TOKEN_URL, fetchSettings);
  console.log('refreshTokenRequest response');
  console.log(response);
  return await checkResponse(response);
};

export const getUserInfoRequest = createAsyncThunk('user/getUserInfoRequest', async () => {
  const fetchSettings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  };

  try {
    const response = await fetch(USER_INFO_URL, fetchSettings);
    return await checkResponse(response);
  } catch (err) {
    if (err.message === 'jwt expired') {
      const refreshData = await refreshTokenRequest();
      setCookies(refreshData);

      const response = await fetch(USER_INFO_URL, fetchSettings);
      return await checkResponse(response);
    } else {
      return Promise.reject(err);
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        setCookies(action.payload);
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerRequest.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        setCookies(action.payload);
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginRequest.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutRequest.fulfilled, (state) => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        state.user = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutRequest.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserInfoRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfoRequest.fulfilled, (state, action) => {
        if (action.payload.accessToken) {
          setCookies(action.payload);
        }
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getUserInfoRequest.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
