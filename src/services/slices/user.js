import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { REGISTER_URL, LOGIN_URL } from '../../constants/api';
import { getCookie, setCookie } from '../../utils/cookie';

const initialState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
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
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  return res;
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
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  return res;
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
        const accessToken = action.payload.accessToken.split('Bearer ')[1];
        const refreshToken = action.payload.refreshToken;
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);
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
        const accessToken = action.payload.accessToken.split('Bearer ')[1];
        const refreshToken = action.payload.refreshToken;
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginRequest.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
