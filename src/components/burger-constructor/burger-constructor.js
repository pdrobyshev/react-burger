import React from 'react';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor = (props) => (
	<div className={`${styles.content}  pl-4  mt-25`}>
		<IngredientsList {...props} />
		<Cart />
	</div>
);

export default BurgerConstructor;
