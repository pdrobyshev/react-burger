import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../../services/order/actions';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Cart = () => {
	const dispatch = useDispatch();
	const { constructorElementsIds, isLoading } = useSelector((store) => store.order);
	const { constructorIngredients, bun } = useSelector((store) => store.burger);

	const totalPrice = useMemo(() => {
		const bunPrice = bun ? bun.price * 2 : 0;
		const ingredientsPrice = constructorIngredients
			? constructorIngredients.reduce((acc, el) => acc + el.price, 0)
			: 0;
		return ingredientsPrice + bunPrice;
	}, [constructorIngredients, bun]);

	const payload = {
		ingredients: constructorElementsIds,
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
