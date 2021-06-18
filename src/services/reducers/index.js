import { combineReducers } from 'redux';

import { reducer as burgerReducer } from './burger';
import { reducer as totalPriceReducer } from './totalPrice';

export const rootReducer = combineReducers({
	burger: burgerReducer,
	totalPrice: totalPriceReducer,
});
