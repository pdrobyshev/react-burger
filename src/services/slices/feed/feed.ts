import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const WS_CONNECTION_START = createAction<string, 'WS_CONNECTION_START'>('WS_CONNECTION_START');
export const WS_CONNECTION_CLOSE = createAction<string, 'WS_CONNECTION_CLOSE'>('WS_CONNECTION_CLOSE');

type TOrderObject = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

type TFeedState = {
  orders: Array<TOrderObject>;
  total: number;
  totalToday: number;
  wsConnected: boolean;
  error: boolean;
};

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
    wsConnectionError: (state, action: PayloadAction<boolean>) => {
      state.wsConnected = false;
      state.error = action.payload;
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
