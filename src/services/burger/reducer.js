import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAIL,
	ADD_CONSTRUCTOR_INGREDIENT,
	DELETE_CONSTRUCTOR_INGREDIENT,
} from '../../constants/actionTypes';

export const initialState = {
	ingredients: [],
	constructorIngredients: [],
	isLoading: false,
	hasError: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INGREDIENTS_REQUEST:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: action.ingredients,
				isLoading: false,
				hasError: false,
			};
		case GET_INGREDIENTS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case ADD_CONSTRUCTOR_INGREDIENT:
			if (action.ingredientType === 'bun') {
				const noBunsConstructorIngredients = state.constructorIngredients.filter(
					(ingredient) => ingredient.type !== action.ingredientType
				);
				const newConstructorIngredients = state.ingredients.filter(
					(ingredient) => ingredient._id === action.ingredientId
				);
				return {
					...state,
					constructorIngredients: [...noBunsConstructorIngredients, ...newConstructorIngredients],
				};
			} else {
				return {
					...state,
					constructorIngredients: [
						...state.constructorIngredients,
						...state.ingredients.filter((ingredient) => ingredient._id === action.ingredientId),
					],
				};
			}
		case DELETE_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...state.constructorIngredients.filter((ingredient) => ingredient._id !== action.ingredientId),
				],
			};
		default:
			return state;
	}
};
