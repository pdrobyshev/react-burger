import React from 'react';

import styles from './page-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { data } from '../../utils/data';

const buns = data.filter((ingredient) => ingredient.type === 'bun');
const sauces = data.filter((ingredient) => ingredient.type === 'sauce');
const main = data.filter((ingredient) => ingredient.type === 'main');
const filteredIngredients = data.filter((ingredient) => ingredient.type !== 'bun');

const PageContent = () => {
	return (
		<main className={`${styles.main}  pl-5  pr-5`}>
			<BurgerIngredients buns={buns} sauces={sauces} main={main} />
			<BurgerConstructor ingredients={filteredIngredients} />
		</main>
	);
};

export default PageContent;
