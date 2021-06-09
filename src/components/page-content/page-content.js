import React from 'react';
import PropTypes from 'prop-types';

import styles from './page-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const PageContent = ({ onOrderModalOpen, onIngredientModalOpen }) => (
	<main className={`${styles.main}  pl-5  pr-5`}>
		<BurgerIngredients onIngredientModalOpen={onIngredientModalOpen} />
		<BurgerConstructor onOrderModalOpen={onOrderModalOpen} />
	</main>
);

PageContent.propTypes = {
	onOrderModalOpen: PropTypes.func.isRequired,
	onIngredientModalOpen: PropTypes.func.isRequired,
};

export default PageContent;
