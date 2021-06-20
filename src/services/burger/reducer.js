import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAIL,
} from '../../constants/actionTypes';

export const initialState = {
	ingredients: [],
	constructorIngredients: [],
	isLoading: false,
	hasError: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_REQUEST:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: action.ingredients,
				isLoading: false,
				hasError: false,
			};
		case GET_INGREDIENTS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		default:
			return state;
	}
};
