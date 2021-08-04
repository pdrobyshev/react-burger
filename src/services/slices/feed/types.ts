export type TOrderObject = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TFeedState = {
  orders: Array<TOrderObject>;
  total: number;
  totalToday: number;
  wsConnected: boolean;
  error: boolean;
};
