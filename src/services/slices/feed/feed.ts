import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFeedState } from './types';

export const WS_CONNECTION_START = createAction<string>('WS_CONNECTION_START');
export const WS_CONNECTION_CLOSE = createAction<string | undefined>('WS_CONNECTION_CLOSE');

export const initialState: TFeedState = {
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
    wsConnectionError: (state) => {
      state.wsConnected = false;
      state.error = true;
    },
    wsGetMessage: (state, action: PayloadAction<TFeedState>) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    },
  },
});

export default ordersFeed.reducer;
export const { wsConnectionOpened, wsConnectionError, wsConnectionClosed, wsGetMessage } = ordersFeed.actions;
