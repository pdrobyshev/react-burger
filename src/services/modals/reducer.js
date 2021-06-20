import {
	OPEN_INGREDIENT_MODAL,
	CLOSE_INGREDIENT_MODAL,
	OPEN_ORDER_MODAL,
	CLOSE_ORDER_MODAL,
} from '../../constants/actionTypes';

export const initialState = {
	currentIngredient: null,
	isIngredientModalOpened: false,
	isOrderModalOpened: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_INGREDIENT_MODAL:
			return {
				currentIngredient: action.ingredient,
				isIngredientModalOpened: true,
			};
		case CLOSE_INGREDIENT_MODAL:
			return {
				currentIngredient: null,
				isIngredientModalOpened: false,
			};
		case OPEN_ORDER_MODAL:
			return {
				isOrderModalOpened: true,
			};
		case CLOSE_ORDER_MODAL:
			return {
				isOrderModalOpened: false,
			};
		default:
			return state;
	}
};
