export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL',
	CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL',
	OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL',
	CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const openIngredientModal = (ingredient) => (dispatch) => {
	dispatch({ type: OPEN_INGREDIENT_MODAL, ingredient: ingredient });
};

export const closeIngredientModal = () => (dispatch) => {
	dispatch({ type: CLOSE_INGREDIENT_MODAL });
};

export const openOrderModal = () => (dispatch) => {
	dispatch({ type: OPEN_ORDER_MODAL });
};

export const closeOrderModal = () => (dispatch) => {
	dispatch({ type: CLOSE_ORDER_MODAL });
};
