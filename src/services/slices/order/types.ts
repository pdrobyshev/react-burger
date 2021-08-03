export type TUserOrderInfo = {
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

export type TCreateOrderResponse = {
  name: string;
  success: boolean;
  order: TUserOrderInfo;
};

export type TGetOrderInfoResponse = {
  success: boolean;
  orders: Array<TOrderInfo>;
};

export type TOrderInfo = {
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

export type TOrderState = {
  orderId: null | number;
  constructorElementsIds: Array<string>;
  isLoading: boolean;
  order: null | TOrderInfo;
  isOrderModalOpened: boolean;
};

export type TCreateOrderBodyPayload = {
  ingredients: Array<string>;
};

export type TGetOrderInfoBodyPayload = string;
