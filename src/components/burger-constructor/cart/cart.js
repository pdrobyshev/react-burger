import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerContext } from '../../../context/burger';

const Cart = ({ onOrderModalOpen }) => {
	const { totalPrice } = useContext(BurgerContext);

	return (
		<section className={`${styles.totalWrapper}  mr-4`}>
			<div className={`${styles.price}  mr-10`}>
				<span className="text  text_type_digits-medium  mr-2">{totalPrice.totalPrice}</span>
				<CurrencyIcon type="primary" />
			</div>
			<Button type="primary" size="large" onClick={onOrderModalOpen}>
				Оформить заказ
			</Button>
		</section>
	);
};

Cart.propTypes = {
	onOrderModalOpen: PropTypes.func.isRequired,
};

export default Cart;
