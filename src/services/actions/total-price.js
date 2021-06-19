import { COUNT_TOTAL_PRICE } from '../../constants/actionTypes';

export const countTotalPrice = (payload) => (dispatch) => {
	console.log(payload);
	dispatch({ type: COUNT_TOTAL_PRICE, payload: payload });
};
