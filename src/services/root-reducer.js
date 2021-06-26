import { combineReducers } from '@reduxjs/toolkit';

import burgerReducer from './slices/burger';
import modalsReducer from './slices/modals';
import orderReducer from './slices/order';

export const rootReducer = combineReducers({
  burger: burgerReducer,
  modals: modalsReducer,
  order: orderReducer,
});
