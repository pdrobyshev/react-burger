export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL',
	CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL',
	OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL',
	CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const openIngredientModal = (ingredient) => ({
	type: OPEN_INGREDIENT_MODAL,
	ingredient: ingredient,
});

export const closeIngredientModal = () => ({
	type: CLOSE_INGREDIENT_MODAL,
});

export const openOrderModal = () => ({
	type: OPEN_ORDER_MODAL,
});

export const closeOrderModal = () => ({
	type: CLOSE_ORDER_MODAL,
});
