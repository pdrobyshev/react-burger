import { COUNT_TOTAL_PRICE } from '../../constants/actionTypes';

const bunsAmount = 2;

export const initialState = {
	totalPrice: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case COUNT_TOTAL_PRICE:
			let bunPrice = 0;
			let ingredientsPrice = 0;
			if (action.payload.bun) {
				bunPrice = action.payload.bun.price * bunsAmount;
			}
			if (action.payload.constructorIngredients.length) {
				ingredientsPrice = action.payload.constructorIngredients.reduce((acc, el) => acc + el.price, 0);
			}
			return { totalPrice: ingredientsPrice + bunPrice };
		default:
			return state;
	}
};
