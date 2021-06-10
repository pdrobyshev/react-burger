import React, { useContext, useEffect } from 'react';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';
import { BurgerContext } from '../../../context/burger';

const IngredientsList = () => {
	const { ingredients, totalPriceDispatcher, setOrderElementsIds } = useContext(BurgerContext);

	const bun = ingredients && ingredients.filter((ingredient) => ingredient.type === 'bun')[0];

	const filteredBurgerElements = ingredients.filter((ingredient) => ingredient.type !== 'bun');
	const burgerElementsList = filteredBurgerElements.map((ingredient) => {
		const { _id, name, image, price } = ingredient;
		return <BurgerElement key={_id} draggable={true} text={name} thumbnail={image} price={price} />;
	});

	const order = filteredBurgerElements.map((el) => el._id);
	bun && order.push(bun._id);

	useEffect(() => {
		ingredients &&
			bun &&
			totalPriceDispatcher({ type: 'ingredients', payload: { filteredBurgerElements, bun } });
		setOrderElementsIds(order);
	}, [totalPriceDispatcher, setOrderElementsIds]);

	return (
		<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
			{bun && (
				<BurgerElement
					type="top"
					isLocked={true}
					text={`${bun.name} (верх)`}
					thumbnail={bun.image}
					price={bun.price}
				/>
			)}

			<div className={`${styles.ingredientsWrapper}  ${styles.scrollHeight}  scroll  pr-2`}>
				{burgerElementsList}
			</div>

			{bun && (
				<BurgerElement
					type="bottom"
					isLocked={true}
					text={`${bun.name} (низ)`}
					thumbnail={bun.image}
					price={bun.price}
				/>
			)}
		</section>
	);
};

export default IngredientsList;
