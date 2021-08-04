import { format, formatRelative } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {
  TRefreshTokenRequestBodyPayload,
  TUpdateUserInfoRequestBodyPayload,
} from '../services/slices/user/types';
import {
  TResetPasswordEmailBodyPayload,
  TSendResetPasswordEmailBodyPayload,
} from '../services/slices/password/types';
import { TCreateOrderBodyPayload, TGetOrderInfoBodyPayload } from '../services/slices/order/types';
import {
  TLoginRequestBodyPayload,
  TLogoutRequestBodyPayload,
  TRegisterRequestBodyPayload,
} from '../services/slices/auth/types';

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err: string) => Promise.reject(err));
};

type TFetchSettingsBodyPayload =
  | TRefreshTokenRequestBodyPayload
  | TUpdateUserInfoRequestBodyPayload
  | TSendResetPasswordEmailBodyPayload
  | TResetPasswordEmailBodyPayload
  | TCreateOrderBodyPayload
  | TGetOrderInfoBodyPayload
  | TRegisterRequestBodyPayload
  | TLoginRequestBodyPayload
  | TLogoutRequestBodyPayload;

export const setFetchSettings = (
  method: string,
  authorizationHeader?: string,
  bodyPayload?: TFetchSettingsBodyPayload
) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(bodyPayload),
  };
};

export const getDateTime = (time: string) => {
  const date = formatRelative(new Date(time), new Date(), { locale: ruLocale });
  const dateCapitalized = date.charAt(0).toUpperCase() + date.slice(1).replace(' в', ',');
  const gmt = format(new Date(time), 'O').replace('GMT', 'i-GMT');
  return `${dateCapitalized} ${gmt}`;
};
