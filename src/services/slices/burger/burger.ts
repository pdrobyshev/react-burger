import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { INGREDIENTS_URL } from '../../../constants/api';
import { createOrder } from '../order/order';
import { checkResponse } from '../../../utils';

export type TIngredient = {
  calories: number;
  carbohydrates: number;
  constructorIngredientId?: string;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};

type TGetIngredientsRequestResponse = {
  success: boolean;
  data: Array<TIngredient>;
};

type TBurgerState = {
  ingredients: [] | any;
  bun: null | any;
  constructorIngredients: any;
  isLoading: boolean;
  hasError: boolean;
};

export const initialState: TBurgerState = {
  ingredients: [],
  bun: null,
  constructorIngredients: [],
  isLoading: false,
  hasError: false,
};

export const getIngredients = createAsyncThunk(
  'burger/getIngredients',
  async (): Promise<TGetIngredientsRequestResponse> => {
    const response = await fetch(INGREDIENTS_URL);
    return await checkResponse(response);
  }
);

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addConstructorBun(state, action: PayloadAction<TIngredient>) {
      state.bun = action.payload;
    },
    addConstructorIngredient: {
      reducer: (state, action: PayloadAction<TIngredient>) => {
        state.constructorIngredients.push(action.payload);
      },
      prepare: (ingredient: TIngredient) => {
        return {
          payload: {
            ...ingredient,
            constructorIngredientId: uuidv4(),
          },
        };
      },
    },
    deleteConstructorIngredient(state, action: PayloadAction<string>) {
      state.constructorIngredients = state.constructorIngredients.filter(
        (ingredient: { constructorIngredientId: string }) =>
          ingredient.constructorIngredientId !== action.payload
      );
    },
    moveConstructorItem(state, action: PayloadAction<{ dragIndex: number; hoverIndex: number }>) {
      const arr = [...state.constructorIngredients];
      const dragItem = arr[action.payload.dragIndex];
      const hoverItem = arr[action.payload.hoverIndex];
      arr[action.payload.hoverIndex] = dragItem;
      arr[action.payload.dragIndex] = hoverItem;

      state.constructorIngredients = arr;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.ingredients = action.payload.data;
      })
      .addCase(getIngredients.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.ingredients = [];
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.bun = null;
        state.constructorIngredients = [];
      });
  },
});

export default burgerSlice.reducer;
export const {
  addConstructorBun,
  addConstructorIngredient,
  deleteConstructorIngredient,
  moveConstructorItem,
} = burgerSlice.actions;
