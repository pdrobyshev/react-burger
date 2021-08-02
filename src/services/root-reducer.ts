import { combineReducers } from '@reduxjs/toolkit';

import burgerReducer from './slices/burger/burger';
import orderReducer from './slices/order/order';
import passwordReducer from './slices/password/password';
import userReducer from './slices/user/user';
import authReducer from './slices/auth/auth';
import feedReducer from './slices/feed/feed';

const rootReducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  password: passwordReducer,
  auth: authReducer,
  user: userReducer,
  feed: feedReducer,
});

export default rootReducer;
