import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '../../constants/api';

const initialState = {
  token: null,
  isLoading: false,
};

export const sendResetPassToken = createAsyncThunk('password/sendResetPassToken', async (email) => {
  const fetchSettings = {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${API_URL}password-reset`, fetchSettings);
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  console.log('=====PASSWORD RESET RESPONSE===');
  console.log(res);
  return res.success;
});

export const resetPassword = createAsyncThunk('password/reset', async (payload) => {
  const fetchSettings = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${API_URL}password-reset/reset`, fetchSettings);
  if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
  const res = await response.json();
  console.log('=====PASSWORD RESET RESPONSE===');
  console.log(res);
  return res.success;
});

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(sendResetPassToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendResetPassToken.fulfilled, (state) => {
        state.isLoading = false;
        /*
         * В случае успеха пользователь направляется на маршрут /reset-password,
         * а на введённый имейл приходит инструкция с кодом для восстановления пароля.
         * Пока вы не знаете, как реализовывать переадресацию,
         * поэтому к перенаправлению пользователя
         * мы рекомендуем вернуться на следующем этапе проектной работы.
         * */
      })
      .addCase(sendResetPassToken.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default passwordSlice.reducer;
