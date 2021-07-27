import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ORDER_URL } from '../../constants/api';
import { checkResponse, setFetchSettings } from '../../utils';
import { getCookie } from '../../utils/cookie';

export const initialState = {
  orderId: null,
  constructorElementsIds: [],
  isLoading: false,
  order: null,
  isOrderModalOpened: false,
};

export const createOrder = createAsyncThunk('burger/createOrder', async (order) => {
  const fetchSettings = setFetchSettings('POST', `Bearer ${getCookie('accessToken')}`, order);
  const response = await fetch(ORDER_URL, fetchSettings);
  return await checkResponse(response);
});

export const getOrderInfo = createAsyncThunk('order/getOrderInfo', async (id) => {
  const fetchSettings = setFetchSettings('GET');
  const response = await fetch(`https://norma.nomoreparties.space/api/orders/${id}`, fetchSettings);
  return await checkResponse(response);
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderElementsIds(state, action) {
      state.constructorElementsIds = action.payload;
    },
    resetOrder(state) {
      state.order = null;
    },
    closeOrderModal(state) {
      state.isOrderModalOpened = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderId = action.payload.order.number;
        state.isOrderModalOpened = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.orderId = null;
        state.isLoading = false;
      })
      .addCase(getOrderInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload.orders[0];
      })
      .addCase(getOrderInfo.rejected, (state) => {
        state.order = null;
        state.isLoading = false;
      }),
});

export default orderSlice.reducer;
export const { closeOrderModal, setOrderElementsIds, resetOrder } = orderSlice.actions;
