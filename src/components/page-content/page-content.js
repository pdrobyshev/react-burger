import React from 'react';

import styles from './page-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const PageContent = ({ ingredients, onOrderModalOpen }) => {
	const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
	const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
	const main = ingredients.filter((ingredient) => ingredient.type === 'main');
	const filteredIngredients = ingredients.filter((ingredient) => ingredient.type !== 'bun');

	return (
		<main className={`${styles.main}  pl-5  pr-5`}>
			<BurgerIngredients buns={buns} sauces={sauces} main={main} />
			<BurgerConstructor ingredients={filteredIngredients} onOrderModalOpen={onOrderModalOpen} />
		</main>
	);
};

export default PageContent;
