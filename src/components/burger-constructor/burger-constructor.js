import React from 'react';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor = ({ ingredients, onOrderModalOpen }) => {
	return (
		<div className={`${styles.content}  pl-4  mt-25`}>
			<IngredientsList ingredients={ingredients} />
			<Cart onOrderModalOpen={onOrderModalOpen} />
		</div>
	);
};

export default BurgerConstructor;
