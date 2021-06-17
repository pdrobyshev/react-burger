import React, { useContext, useState } from 'react';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerContext } from '../../../context/burger';
import { API_URL } from '../../../constants/api';

const Cart = () => {
	const { totalPrice, orderElementsIds, setOrderId, onOrderModalToggle } = useContext(BurgerContext);
	const [isLoading, setIsLoading] = useState(false);

	const payload = {
		ingredients: orderElementsIds,
	};

	const fetchSettings = {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const onOrderBtnClick = () => {
		setIsLoading(true);

		fetch(`${API_URL}orders`, fetchSettings)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
				}

				return res.json();
			})
			.then((res) => {
				setOrderId(res.order.number);
				onOrderModalToggle();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const orderBtn = (
		<Button type="primary" size="large" onClick={onOrderBtnClick}>
			Оформить заказ
		</Button>
	);

	return (
		<section className={`${styles.totalWrapper}  mr-4`}>
			<div className={`${styles.price}  mr-10`}>
				<span className="text  text_type_digits-medium  mr-2">{totalPrice.totalPrice}</span>
				<CurrencyIcon type="primary" />
			</div>
			{isLoading ? <span className="text  text_type_main-medium">Оформляем заказ</span> : orderBtn}
		</section>
	);
};

export default Cart;
