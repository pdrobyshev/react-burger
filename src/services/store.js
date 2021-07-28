import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';
import { socketMiddleware } from './middleware/socket';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
  devTools: process.env.NODE_ENV !== 'production',
});
