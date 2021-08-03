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

export type TGetIngredientsRequestResponse = {
  success: boolean;
  data: Array<TIngredient>;
};

export type TBurgerState = {
  ingredients: [] | any;
  bun: null | any;
  constructorIngredients: any;
  isLoading: boolean;
  hasError: boolean;
};
