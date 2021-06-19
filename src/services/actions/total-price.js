import { COUNT_TOTAL_PRICE } from '../../constants/actionTypes';

export const countTotalPrice = (payload) => (dispatch) => {
	dispatch({ type: COUNT_TOTAL_PRICE, payload: payload });
};
