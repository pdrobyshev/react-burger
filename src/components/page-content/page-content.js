import React from 'react';
import PropTypes from 'prop-types';

import styles from './page-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const PageContent = ({ ingredients, onOrderModalOpen, onIngredientModalOpen }) => {
	const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
	const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
	const main = ingredients.filter((ingredient) => ingredient.type === 'main');
	const burgerConstructorElements = ingredients.filter((ingredient) => ingredient.type !== 'bun');

	return (
		<main className={`${styles.main}  pl-5  pr-5`}>
			<BurgerIngredients
				buns={buns}
				sauces={sauces}
				main={main}
				onIngredientModalOpen={onIngredientModalOpen}
			/>
			<BurgerConstructor ingredients={burgerConstructorElements} onOrderModalOpen={onOrderModalOpen} />
		</main>
	);
};

PageContent.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
		})
	).isRequired,
	onOrderModalOpen: PropTypes.func.isRequired,
	onIngredientModalOpen: PropTypes.func.isRequired,
};

export default PageContent;
