import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAIL,
} from '../../constants/actionTypes';

export const initialState = {
	ingredients: [],
	constructorIngredients: [],
	currentIngredient: null,
	order: {},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_REQUEST:
		case GET_INGREDIENTS_SUCCESS:
		case GET_INGREDIENTS_FAIL:
		default:
			return state;
	}
};
