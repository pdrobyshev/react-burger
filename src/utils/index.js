import { format, formatRelative } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const setFetchSettings = (method, authorizationHeader, bodyPayload) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(bodyPayload),
  };
};

export const getDateTime = (time) => {
  const date = formatRelative(new Date(time), new Date(), { locale: ruLocale });
  const dateCapitalized = date.charAt(0).toUpperCase() + date.slice(1).replace(' в', ',');
  const gmt = format(new Date(time), 'O').replace('GMT', 'i-GMT');
  const dateTime = `${dateCapitalized} ${gmt}`;

  return dateTime;
};
