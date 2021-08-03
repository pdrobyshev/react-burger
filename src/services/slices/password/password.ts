import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RESET_PASSWORD_URL, SEND_RESET_PASSWORD_EMAIL_URL } from '../../../constants/api';
import { checkResponse, setFetchSettings } from '../../../utils';

type TSendResetPasswordResponse = {
  message: string;
  success: boolean;
};

type TResetPasswordResponse = TSendResetPasswordResponse;

type TPasswordState = {
  isResetEmailSent: boolean;
  isPasswordReset: boolean;
  isLoading: boolean;
};

export const initialState: TPasswordState = {
  isResetEmailSent: false,
  isPasswordReset: false,
  isLoading: false,
};

export type TSendResetPasswordEmailBodyPayload = {
  email: string;
};

export type TResetPasswordEmailBodyPayload = {
  password: string;
  token: string;
};

export const sendResetPasswordEmail = createAsyncThunk(
  'password/sendResetPasswordEmail',
  async (payload: TSendResetPasswordEmailBodyPayload): Promise<TSendResetPasswordResponse> => {
    const fetchSettings = setFetchSettings('POST', '', payload);
    const response = await fetch(SEND_RESET_PASSWORD_EMAIL_URL, fetchSettings as RequestInit);
    return await checkResponse(response);
  }
);

export const resetPassword = createAsyncThunk(
  'password/reset',
  async (payload: TResetPasswordEmailBodyPayload): Promise<TResetPasswordResponse> => {
    const fetchSettings = setFetchSettings('POST', '', payload);
    const response = await fetch(RESET_PASSWORD_URL, fetchSettings as RequestInit);
    return await checkResponse(response);
  }
);

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {},
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
