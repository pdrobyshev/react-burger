import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentIngredient: null,
	isIngredientModalOpened: false,
	isOrderModalOpened: false,
};

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openIngredientModal(state, action) {
			state.currentIngredient = action.payload;
			state.isIngredientModalOpened = true;
		},
		closeIngredientModal(state) {
			state.currentIngredient = null;
			state.isIngredientModalOpened = false;
		},
		openOrderModal(state) {
			state.isOrderModalOpened = true;
		},
		closeOrderModal(state) {
			state.isOrderModalOpened = false;
		},
	},
});

export default modalsSlice.reducer;
export const { openIngredientModal, closeIngredientModal, openOrderModal, closeOrderModal } =
	modalsSlice.actions;
