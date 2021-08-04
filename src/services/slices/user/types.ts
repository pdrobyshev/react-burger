export type TGetUserInfoRequestResponse = {
  success: boolean;
  user: { email: string; name: string };
};

export type TRefreshTokenRequestResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TUpdateUserInfoRequestResponse = TGetUserInfoRequestResponse;

export type TUserState = {
  isLoggedIn: boolean;
  user: null | { email: string; name: string };
  isLoading: boolean;
};

export type TRefreshTokenRequestBodyPayload = {
  token: string;
};

export type TUpdateUserInfoRequestBodyPayload = {
  name: string;
  email: string;
  password: string;
};
