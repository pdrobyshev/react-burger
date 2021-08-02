import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ORDER_URL } from '../../../constants/api';
import { checkResponse, setFetchSettings } from '../../../utils';
import { getCookie } from '../../../utils/cookie';

type TUserOrderInfo = {
  createdAt: string;
  ingredients: Array<{
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
  }>;
  name: string;
  number: number;
  owner: { createdAt: string; email: string; name: string; updatedAt: string };
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
};

type TCreateOrderResponse = {
  name: string;
  success: boolean;
  order: TUserOrderInfo;
};

type TGetOrderInfoResponse = {
  success: boolean;
  orders: Array<TOrderInfo>;
};

type TOrderInfo = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  owner: string;
  status: string;
  updatedAt: string;
  __v: number;
  _id?: string;
};

type TOrderState = {
  orderId: null | number;
  constructorElementsIds: Array<string>;
  isLoading: boolean;
  order: null | TOrderInfo;
  isOrderModalOpened: boolean;
};

export const initialState: TOrderState = {
  orderId: null,
  constructorElementsIds: [],
  isLoading: false,
  order: null,
  isOrderModalOpened: false,
};

export const createOrder = createAsyncThunk(
  'burger/createOrder',
  async (order: { ingredients: Array<string> }): Promise<TCreateOrderResponse> => {
    const fetchSettings = setFetchSettings('POST', `Bearer ${getCookie('accessToken')}`, order);
    const response = await fetch(ORDER_URL, fetchSettings);
    return await checkResponse(response);
  }
);

export const getOrderInfo = createAsyncThunk(
  'order/getOrderInfo',
  async (id: string): Promise<TGetOrderInfoResponse> => {
    const fetchSettings = setFetchSettings('GET');
    const response = await fetch(`https://norma.nomoreparties.space/api/orders/${id}`, fetchSettings);
    return await checkResponse(response);
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderElementsIds(state, action: PayloadAction<Array<string>>) {
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
