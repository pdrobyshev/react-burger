import { COUNT_TOTAL_PRICE } from '../../constants/actionTypes';

const bunsAmount = 2;

export const initialState = {
	totalPrice: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case COUNT_TOTAL_PRICE:
			const totalPrice = action.payload.saucesAndMain.reduce((acc, el) => acc + el.price, 0);
			const bunPrice = action.payload.bun.price * bunsAmount;
			return { totalPrice: totalPrice + bunPrice };
		default:
			return state;
	}
};
