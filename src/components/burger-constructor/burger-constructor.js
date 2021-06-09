import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor = ({ onOrderModalOpen }) => {
	return (
		<div className={`${styles.content}  pl-4  mt-25`}>
			<IngredientsList />
			<Cart onOrderModalOpen={onOrderModalOpen} />
		</div>
	);
};

BurgerConstructor.propTypes = {
	onOrderModalOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
