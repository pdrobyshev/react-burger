import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from './order';

const initialState = {
  isOrderModalOpened: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
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
export const { closeOrderModal } = modalsSlice.actions;
