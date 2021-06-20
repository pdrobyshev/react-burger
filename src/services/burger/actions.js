import { API_URL } from '../../constants/api';
import {
	GET_INGREDIENTS_FAIL,
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
	ADD_CONSTRUCTOR_INGREDIENT,
	DELETE_CONSTRUCTOR_INGREDIENT,
} from '../../constants/actionTypes';

export const addConstructorIngredient = (ingredientId, ingredientType) => (dispatch) => {
	dispatch({
		type: ADD_CONSTRUCTOR_INGREDIENT,
		ingredientId: ingredientId,
		ingredientType: ingredientType,
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
			dispatch({ type: GET_INGREDIENTS_FAIL });
		});
};
