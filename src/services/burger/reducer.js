import { v4 as uuidv4 } from 'uuid';
import {
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_ERROR,
	ADD_CONSTRUCTOR_BUN,
	ADD_CONSTRUCTOR_INGREDIENT,
	DELETE_CONSTRUCTOR_INGREDIENT,
	MOVE_CONSTRUCTOR_ITEM,
	RESET_CONSTRUCTOR_STATE,
} from '../../constants/actionTypes';

export const initialState = {
	ingredients: [],
	bun: null,
	constructorIngredients: [],
	isLoading: false,
	hasError: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_CONSTRUCTOR_STATE:
			return {
				...state,
				bun: null,
				constructorIngredients: [],
			};
		case MOVE_CONSTRUCTOR_ITEM:
			const arr = [...state.constructorIngredients];
			const dragItem = arr[action.dragIndex];
			const hoverItem = arr[action.hoverIndex];
			arr[action.hoverIndex] = dragItem;
			arr[action.dragIndex] = hoverItem;
			return {
				...state,
				constructorIngredients: arr,
			};
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
		case GET_INGREDIENTS_ERROR:
			return {
				...state,
				ingredients: [],
				isLoading: false,
				hasError: true,
			};
		case ADD_CONSTRUCTOR_BUN:
			return {
				...state,
				bun: action.bun,
			};
		case ADD_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...state.constructorIngredients,
					{
						...action.ingredient,
						constructorIngredientId: uuidv4(),
					},
				],
			};
		case DELETE_CONSTRUCTOR_INGREDIENT:
			return {
				...state,
				constructorIngredients: [
					...state.constructorIngredients.filter(
						(ingredient) => ingredient.constructorIngredientId !== action.ingredientId
					),
				],
			};
		default:
			return state;
	}
};
