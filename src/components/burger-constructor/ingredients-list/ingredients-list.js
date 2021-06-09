import React, { useContext, useEffect } from 'react';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';
import { BurgerContext } from '../../../context/burger';

const IngredientsList = () => {
	const { ingredients, totalPriceDispatcher } = useContext(BurgerContext);

	const buns = ingredients && ingredients.filter((ingredient) => ingredient.type === 'bun');
	const bun = buns[0];

	const filteredBurgerElements = ingredients.filter((ingredient) => ingredient.type !== 'bun');
	const burgerElementsList = filteredBurgerElements.map((ingredient) => {
		const { _id, name, image, price } = ingredient;
		return <BurgerElement key={_id} draggable={true} text={name} thumbnail={image} price={price} />;
	});

	useEffect(() => {
		ingredients &&
			bun &&
			totalPriceDispatcher({ type: 'ingredients', payload: { filteredBurgerElements, bun } });
	}, [totalPriceDispatcher]);

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
