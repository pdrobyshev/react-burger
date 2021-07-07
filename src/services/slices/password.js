import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '../../constants/api';

const initialState = {
  isResetEmailSent: false,
  isPasswordReset: false,
  isLoading: false,
};

export const sendResetPasswordEmail = createAsyncThunk('password/sendResetPasswordEmail', async (email) => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  };

  const response = await fetch(`${API_URL}password-reset`, fetchSettings);
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  return res;
});

export const resetPassword = createAsyncThunk('password/reset', async (payload) => {
  const fetchSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${API_URL}password-reset/reset`, fetchSettings);
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  return res;
});

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(sendResetPasswordEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendResetPasswordEmail.fulfilled, (state) => {
        state.isResetEmailSent = true;
        state.isLoading = false;
      })
      .addCase(sendResetPasswordEmail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isPasswordReset = true;
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default passwordSlice.reducer;
