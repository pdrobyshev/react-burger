import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';
import { socketMiddleware } from './middleware/socket';
import { ALL_ORDERS_URL } from '../constants/api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware(ALL_ORDERS_URL)),
  devTools: process.env.NODE_ENV !== 'production',
});
