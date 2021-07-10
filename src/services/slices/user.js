import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { USER_INFO_URL, REFRESH_TOKEN_URL } from '../../constants/api';
import { getCookie, setCookies } from '../../utils/cookie';
import { checkResponse } from '../../utils';

const initialState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
};

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

export const updateUserInfoRequest = createAsyncThunk('user/updateUserInfoRequest', async (payload) => {
  const fetchSettings = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify(payload),
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
      })
      .addCase(updateUserInfoRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfoRequest.fulfilled, (state, action) => {
        if (action.payload.accessToken) {
          setCookies(action.payload);
        }
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(updateUserInfoRequest.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
