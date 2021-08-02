import { format, formatRelative } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

//todo fix checkResponse any
export const checkResponse = (res: any) => {
  return res.ok ? res.json() : res.json().then((err: string) => Promise.reject(err));
};

export const setFetchSettings = (method: string, authorizationHeader: string, bodyPayload: object) => {
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
