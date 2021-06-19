import { CLOSE_INGREDIENT_MODAL, OPEN_INGREDIENT_MODAL } from '../../constants/actionTypes';

export const initialState = {
	currentIngredient: null,
	isIngredientModalOpened: false,
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
		default:
			return state;
	}
};
