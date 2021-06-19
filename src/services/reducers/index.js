import { combineReducers } from 'redux';

import { reducer as burgerReducer } from './burger';
import { reducer as totalPriceReducer } from './total-price';
import { reducer as modalsReducer } from './modals';

export const rootReducer = combineReducers({
	burger: burgerReducer,
	totalPrice: totalPriceReducer,
	modals: modalsReducer,
});
