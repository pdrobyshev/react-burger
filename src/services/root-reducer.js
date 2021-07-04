import { combineReducers } from '@reduxjs/toolkit';

import burgerReducer from './slices/burger';
import modalsReducer from './slices/modals';
import orderReducer from './slices/order';
import passwordReducer from './slices/password';

export const rootReducer = combineReducers({
  burger: burgerReducer,
  modals: modalsReducer,
  order: orderReducer,
  password: passwordReducer,
});
