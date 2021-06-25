import React from 'react';
import { useSelector } from 'react-redux';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor = () => {
	const { constructorIngredients, bun } = useSelector((state) => state.burger);

	return (
		<div className={`${styles.content}  pl-4  mt-25`}>
			<IngredientsList />
			{bun || constructorIngredients.length ? <Cart /> : null}
		</div>
	);
};

export default BurgerConstructor;
