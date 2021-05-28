import React from 'react';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';
import { data } from '../../../utils/data';

const tempImg1 = 'https://code.s3.yandex.net/react/code/bun-02.png';

const burgerElementsList = data
	.filter((ingredient) => ingredient.type !== 'bun')
	.map((ingredient) => {
		const { _id, name, image, price } = ingredient;
		return <BurgerElement key={_id} draggable={true} text={name} thumbnail={image} price={price} />;
	});

const IngredientsList = () => (
	<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
		<BurgerElement
			type="top"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (верх)"
			thumbnail={tempImg1}
			price={20}
		/>

		<div className={`${styles.ingredientsWrapper}  ${styles.scrollHeight}  scroll  pr-2`}>
			{burgerElementsList}
		</div>

		<BurgerElement
			type="bottom"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (низ)"
			thumbnail={tempImg1}
			price={20}
		/>
	</section>
);

export default IngredientsList;
