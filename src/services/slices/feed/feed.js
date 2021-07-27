import { createAction, createSlice } from '@reduxjs/toolkit';

export const WS_CONNECTION_START = createAction('WS_CONNECTION_START');
export const WS_CONNECTION_CLOSE = createAction('WS_CONNECTION_CLOSE');

export const initialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  error: false,
};

export const ordersFeed = createSlice({
  name: 'ordersFeed',
  initialState,
  reducers: {
    wsConnectionOpened: (state) => {
      state.wsConnected = true;
      state.error = false;
    },
    wsConnectionClosed: (state) => {
      state.wsConnected = false;
      state.error = false;
    },
    wsConnectionError: (state, action) => {
      state.wsConnected = false;
      state.error = action.payload;
    },
    wsGetMessage: (state, action) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    },
  },
});

export default ordersFeed.reducer;
export const { wsConnectionOpened, wsConnectionError, wsConnectionClosed, wsGetMessage } = ordersFeed.actions;
