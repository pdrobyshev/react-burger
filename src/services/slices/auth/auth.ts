import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from '../../../constants/api';
import { deleteCookie, getCookie, setCookies } from '../../../utils/cookie';
import { checkResponse, setFetchSettings } from '../../../utils';

type TRegisterRequestResponse = TLoginRequestResponse;

type TLoginRequestResponse = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: { email: string; name: string };
};

type TLogoutResponse = {
  message: string;
  success: boolean;
};

type TAuthState = {
  isLoggedIn: boolean;
  user: null | { email: string; name: string };
  isLoading: boolean;
};

export const initialState: TAuthState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
};

export const registerRequest = createAsyncThunk(
  'auth/registerRequest',
  async (payload: { email: string; name: string; password: string }): Promise<TRegisterRequestResponse> => {
    const fetchSettings = setFetchSettings('POST', '', payload);
    const response = await fetch(REGISTER_URL, fetchSettings);
    return await checkResponse(response);
  }
);

export const loginRequest = createAsyncThunk(
  'auth/loginRequest',
  async (payload: { email: string; password: string }): Promise<TLoginRequestResponse> => {
    const fetchSettings = setFetchSettings('POST', '', payload);
    const response = await fetch(LOGIN_URL, fetchSettings);
    return await checkResponse(response);
  }
);

export const logoutRequest = createAsyncThunk('auth/logoutRequest', async (): Promise<TLogoutResponse> => {
  const fetchSettings = setFetchSettings('POST', '', { token: getCookie('refreshToken') });
  const response = await fetch(LOGOUT_URL, fetchSettings);
  return await checkResponse(response);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
