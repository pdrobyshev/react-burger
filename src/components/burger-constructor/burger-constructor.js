import React from 'react';
import { useSelector } from 'react-redux';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor = () => {
	const { constructorElementsIds } = useSelector((store) => store.order);

	return (
		<div className={`${styles.content}  pl-4  mt-25`}>
			<IngredientsList />
			{constructorElementsIds.length ? <Cart /> : null}
		</div>
	);
};

export default BurgerConstructor;
