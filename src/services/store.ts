import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from 'react-redux';

import rootReducer from './root-reducer';
import { socketMiddleware } from './middleware/socket';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

// type TApplicationActions = ;

// Типизация thunk'ов в нашем приложении
// export type AppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, RootState, TApplicationActions>
// >;

// Теперь этот хук «знает» структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
// Хук не даст отправить экшен, который ему не знаком
// export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => dispatchHook<typeof store.dispatch>();

export default store;
