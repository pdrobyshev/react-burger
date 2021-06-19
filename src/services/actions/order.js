import { API_URL } from '../../constants/api';
import {
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_SUCCESS,
	CREATE_ORDER_FAIL,
	SET_ORDER_ELEMENTS_IDS,
} from '../../constants/actionTypes';
import { openOrderModal } from './modals';

export const createOrder = (payload) => (dispatch) => {
	dispatch({ type: CREATE_ORDER_REQUEST });

	const fetchSettings = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch(`${API_URL}orders`, fetchSettings)
		.then((res) => {
			if (!res.ok) return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
			return res.json();
		})
		.then((res) => {
			dispatch({ type: CREATE_ORDER_SUCCESS, orderId: res.order.number });
			dispatch(openOrderModal());
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: CREATE_ORDER_FAIL });
		});
};

export const setOrderElementsIds = (order) => (dispatch) => {
	dispatch({ type: SET_ORDER_ELEMENTS_IDS, order: order });
};
