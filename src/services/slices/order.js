import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '../../constants/api';
import { openOrderModal } from './modals';
import { resetConstructorState } from './burger';

const initialState = {
	orderId: null,
	constructorElementsIds: [],
	isLoading: false,
};

export const createOrder = createAsyncThunk('burger/createOrder', async (order, { dispatch }) => {
	const fetchSettings = {
		method: 'POST',
		body: JSON.stringify(order),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const response = await fetch(`${API_URL}orders`, fetchSettings);
	if (!response.ok) return Promise.reject(`Что-то пошло не так :( Статус ${response.status}`);
	const res = await response.json();
	dispatch(openOrderModal());
	dispatch(resetConstructorState());
	return res.order.number;
});

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrderElementsIds(state, action) {
			state.constructorElementsIds = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(createOrder.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.isLoading = false;
				state.orderId = action.payload;
			})
			.addCase(createOrder.rejected, (state) => {
				state.orderId = null;
				state.isLoading = false;
			}),
});

export default orderSlice.reducer;
export const { setOrderElementsIds } = orderSlice.actions;
