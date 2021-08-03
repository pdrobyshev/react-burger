import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { REFRESH_TOKEN_URL, USER_INFO_URL } from '../../../constants/api';
import { getCookie, setCookies } from '../../../utils/cookie';
import { checkResponse, setFetchSettings } from '../../../utils';

type TGetUserInfoRequestResponse = {
  success: boolean;
  user: { email: string; name: string };
};

type TRefreshTokenRequestResponse = {
  accessToken: string;
  refreshToken: string;
};

type TUpdateUserInfoRequestResponse = TGetUserInfoRequestResponse;

type TUserState = {
  isLoggedIn: boolean;
  user: null | { email: string; name: string };
  isLoading: boolean;
};

export const initialState: TUserState = {
  isLoggedIn: !!getCookie('accessToken'),
  user: null,
  isLoading: false,
};

export type TRefreshTokenRequestBodyPayload = {
  token: string;
};

export type TUpdateUserInfoRequestBodyPayload = {
  name: string;
  email: string;
  password: string;
};

const fetchWithRefresh = async (url: string, fetchSettings: RequestInit) => {
  try {
    const response = await fetch(url, fetchSettings);
    return await checkResponse(response);
  } catch (err) {
    if (err.message === 'jwt expired') {
      const refreshData = await refreshTokenRequest();
      setCookies(refreshData);

      const response = await fetch(url, fetchSettings);
      return await checkResponse(response);
    } else {
      return Promise.reject(err);
    }
  }
};

const refreshTokenRequest = async (): Promise<TRefreshTokenRequestResponse> => {
  const fetchSettings = setFetchSettings('POST', getCookie('refreshToken'), {
    token: getCookie('refreshToken'),
  } as TRefreshTokenRequestBodyPayload);
  const response = await fetch(REFRESH_TOKEN_URL, fetchSettings as RequestInit);
  return await checkResponse(response);
};

export const getUserInfoRequest = createAsyncThunk(
  'user/getUserInfoRequest',
  async (): Promise<TGetUserInfoRequestResponse> => {
    const fetchSettings = setFetchSettings('GET', `Bearer ${getCookie('accessToken')}`);
    return await fetchWithRefresh(USER_INFO_URL, fetchSettings as RequestInit);
  }
);

export const updateUserInfoRequest = createAsyncThunk(
  'user/updateUserInfoRequest',
  async (payload: TUpdateUserInfoRequestBodyPayload): Promise<TUpdateUserInfoRequestResponse> => {
    const fetchSettings = setFetchSettings('PATCH', `Bearer ${getCookie('accessToken')}`, payload);
    return await fetchWithRefresh(USER_INFO_URL, fetchSettings as RequestInit);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUserInfoRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfoRequest.fulfilled, (state, action) => {
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
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(updateUserInfoRequest.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
