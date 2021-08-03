import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from 'react-redux';
import { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './root-reducer';
import { socketMiddleware } from './middleware/socket';

type RootState = ReturnType<typeof rootReducer>;

const middleware: Array<Middleware<{}, RootState> | ThunkMiddleware<RootState>> = [
  socketMiddleware(),
  ...getDefaultMiddleware<RootState>(),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<typeof store.dispatch>();

export default store;
