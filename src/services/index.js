import { combineReducers } from 'redux';

import { reducer as burgerReducer } from './burger/reducer';
import { reducer as totalPriceReducer } from './total-price/reducer';
import { reducer as modalsReducer } from './modals/reducer';
import { reducer as orderReducer } from './order/reducer';

export const rootReducer = combineReducers({
	burger: burgerReducer,
	totalPrice: totalPriceReducer,
	modals: modalsReducer,
	order: orderReducer,
});
