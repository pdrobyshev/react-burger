import { API_URL } from '../../constants/api';
import {
	GET_INGREDIENTS_FAIL,
	GET_INGREDIENTS_REQUEST,
	GET_INGREDIENTS_SUCCESS,
} from '../../constants/actionTypes';

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
