import { CLOSE_INGREDIENT_MODAL, OPEN_INGREDIENT_MODAL } from '../../constants/actionTypes';

export const openIngredientModal = (ingredient) => (dispatch) => {
	dispatch({ type: OPEN_INGREDIENT_MODAL, ingredient: ingredient });
};

export const closeIngredientModal = () => (dispatch) => {
	dispatch({ type: CLOSE_INGREDIENT_MODAL });
};
