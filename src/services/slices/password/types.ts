export type TSendResetPasswordResponse = {
  message: string;
  success: boolean;
};

export type TResetPasswordResponse = TSendResetPasswordResponse;

export type TPasswordState = {
  isResetEmailSent: boolean;
  isPasswordReset: boolean;
  isLoading: boolean;
};

export type TSendResetPasswordEmailBodyPayload = {
  email: string;
};

export type TResetPasswordEmailBodyPayload = {
  password: string;
  token: string;
};
