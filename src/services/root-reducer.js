import { combineReducers } from '@reduxjs/toolkit';

import burgerReducer from './slices/burger';
import orderReducer from './slices/order';
import passwordReducer from './slices/password';
import userReducer from './slices/user';
import authReducer from './slices/auth';
import feedReducer from './slices/feed';

export const rootReducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  password: passwordReducer,
  auth: authReducer,
  user: userReducer,
  feed: feedReducer,
});
