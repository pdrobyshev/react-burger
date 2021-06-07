import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';

const tempImg1 = 'https://code.s3.yandex.net/react/code/bun-02.png';

const IngredientsList = ({ ingredients }) => {
	const burgerElementsList = ingredients.map((ingredient) => {
		const { _id, name, image, price } = ingredient;
		return <BurgerElement key={_id} draggable={true} text={name} thumbnail={image} price={price} />;
	});

	return (
		<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
			<BurgerElement
				type="top"
				isLocked={true}
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
				text="Краторная булка N-200i (низ)"
				thumbnail={tempImg1}
				price={20}
			/>
		</section>
	);
};

IngredientsList.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IngredientsList;
