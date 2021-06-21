import { API_URL } from '../../constants/api';
import {
	GET_INGREDIENTS_ERROR,
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	ADD_CONSTRUCTOR_BUN,
	ADD_CONSTRUCTOR_INGREDIENT,
	DELETE_CONSTRUCTOR_INGREDIENT,
	MOVE_CONSTRUCTOR_ITEM,
	RESET_CONSTRUCTOR_STATE,
} from '../../constants/actionTypes';

export const resetConstructorState = () => (dispatch) => {
	dispatch({
		type: RESET_CONSTRUCTOR_STATE,
	});
};

export const moveConstructorItem = (dragIndex, hoverIndex) => (dispatch) => {
	dispatch({
		type: MOVE_CONSTRUCTOR_ITEM,
		dragIndex,
		hoverIndex,
	});
};

export const addConstructorIngredient = (ingredient) => (dispatch) => {
	dispatch({
		type: ADD_CONSTRUCTOR_INGREDIENT,
		ingredient: ingredient,
	});
};

export const addConstructorBun = (ingredient) => (dispatch) => {
	dispatch({
		type: ADD_CONSTRUCTOR_BUN,
		bun: ingredient,
	});
};

export const deleteConstructorIngredient = (ingredientId) => (dispatch) => {
	dispatch({
		type: DELETE_CONSTRUCTOR_INGREDIENT,
		ingredientId: ingredientId,
	});
};

export const getIngredients = () => (dispatch) => {
	dispatch({ type: GET_INGREDIENTS_REQUEST });

	fetch(`${API_URL}ingredients`)
		.then((res) => {
			if (!res.ok) return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
			return res.json();
		})
		.then((res) => {
			dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredients: res.data });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: GET_INGREDIENTS_ERROR });
		});
};
