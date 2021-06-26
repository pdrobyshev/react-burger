import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from './order';

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
    closeOrderModal(state) {
      state.isOrderModalOpened = false;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(createOrder.fulfilled, (state) => {
      state.isOrderModalOpened = true;
    }),
});

export default modalsSlice.reducer;
export const { openIngredientModal, closeIngredientModal, closeOrderModal } = modalsSlice.actions;
