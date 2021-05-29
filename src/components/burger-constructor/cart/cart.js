import React from 'react';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Cart = () => (
	<section className={`${styles.totalWrapper}  mr-4`}>
		<div className={`${styles.price}  mr-10`}>
			<span className="text  text_type_digits-medium  mr-2">610</span>
			<CurrencyIcon type="primary" />
		</div>
		<Button type="primary" size="large">
			Оформить заказ
		</Button>
	</section>
);

export default Cart;
