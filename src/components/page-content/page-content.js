import React from 'react';

import styles from './page-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
// import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const PageContent = () => {
	return (
		<main className={`${styles.main}  pl-5  pr-5`}>
			<BurgerIngredients />
			{/*<BurgerConstructor />*/}
		</main>
	);
};

export default PageContent;
