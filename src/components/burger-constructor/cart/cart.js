import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerContext } from '../../../context/burger';

const Cart = ({ onOrderModalOpen }) => {
	const { totalPrice, orderElementsIds, setOrderId } = useContext(BurgerContext);
	const payload = {
		ingredients: orderElementsIds,
	};

	const API_URL = 'https://norma.nomoreparties.space/api/orders';
	const fetchSettings = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const onOrderBtnClick = () => {
		fetch(API_URL, fetchSettings)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
				}

				return res.json();
			})
			.then((res) => {
				setOrderId(res.order.number);
				onOrderModalOpen();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {});
	};

	return (
		<section className={`${styles.totalWrapper}  mr-4`}>
			<div className={`${styles.price}  mr-10`}>
				<span className="text  text_type_digits-medium  mr-2">{totalPrice.totalPrice}</span>
				<CurrencyIcon type="primary" />
			</div>
			<Button type="primary" size="large" onClick={onOrderBtnClick}>
				Оформить заказ
			</Button>
		</section>
	);
};

Cart.propTypes = {
	onOrderModalOpen: PropTypes.func.isRequired,
};

export default Cart;
