import {
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS,
	CREATE_ORDER_FAIL,
	SET_ORDER_ELEMENTS_IDS,
} from '../../constants/actionTypes';

export const initialState = {
	orderId: null,
	constructorElementsIds: [],
	isLoading: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ORDER_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case CREATE_ORDER_SUCCESS:
			return {
				...state,
				isLoading: false,
				orderId: action.orderId,
			};
		case CREATE_ORDER_FAIL:
			return {
				...state,
				isLoading: false,
			};
		case SET_ORDER_ELEMENTS_IDS:
			return {
				...state,
				constructorElementsIds: action.constructorElementsIds,
			};
		default:
			return state;
	}
};
