import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { REGISTER_URL, LOGIN_URL, LOGOUT_URL } from '../../constants/api';
import { deleteCookie, getCookie, setCookies } from '../../utils/cookie';
import { checkResponse } from '../../utils';

const initialState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
};

const setFetchSettings = (bodyPayload) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyPayload),
  };
};

export const registerRequest = createAsyncThunk('auth/registerRequest', async (payload) => {
  const fetchSettings = setFetchSettings(payload);
  const response = await fetch(REGISTER_URL, fetchSettings);
  return await checkResponse(response);
});

export const loginRequest = createAsyncThunk('auth/loginRequest', async (payload) => {
  const fetchSettings = setFetchSettings(payload);
  const response = await fetch(LOGIN_URL, fetchSettings);
  return await checkResponse(response);
});

export const logoutRequest = createAsyncThunk('auth/logoutRequest', async () => {
  const fetchSettings = setFetchSettings({ token: getCookie('refreshToken') });
  const response = await fetch(LOGOUT_URL, fetchSettings);
  return await checkResponse(response);
});

const authSlice = createSlice({
  name: 'auth',
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
      }),
});

export default authSlice.reducer;
