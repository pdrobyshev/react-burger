export type TRegisterRequestResponse = TLoginRequestResponse;

export type TLoginRequestResponse = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: { email: string; name: string };
};

export type TLogoutResponse = {
  message: string;
  success: boolean;
};

export type TAuthState = {
  isLoggedIn: boolean;
  user: null | { email: string; name: string };
  isLoading: boolean;
};

export type TRegisterRequestBodyPayload = {
  email: string;
  name: string;
  password: string;
};

export type TLoginRequestBodyPayload = {
  email: string;
  password: string;
};

export type TLogoutRequestBodyPayload = {
  token: string;
};
