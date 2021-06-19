import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../../services/actions/order';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Cart = () => {
	const dispatch = useDispatch();
	const { order, isLoading } = useSelector((store) => store.order);
	const { totalPrice } = useSelector((store) => store.totalPrice);

	const payload = {
		ingredients: order,
	};

	const onOrderBtnClick = () => {
		dispatch(createOrder(payload));
	};

	const orderBtn = (
		<Button type="primary" size="large" onClick={onOrderBtnClick}>
			Оформить заказ
		</Button>
	);

	return (
		<section className={`${styles.totalWrapper}  mr-4`}>
			<div className={`${styles.price}  mr-10`}>
				<span className="text  text_type_digits-medium  mr-2">{totalPrice}</span>
				<CurrencyIcon type="primary" />
			</div>
			{isLoading ? <span className="text  text_type_main-medium">Оформляем заказ</span> : orderBtn}
		</section>
	);
};

export default Cart;
