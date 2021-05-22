import React from 'react';

import styles from './MainContent.module.scss';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const MainContent = () => {
	return (
		<main className={styles.main}>
			<BurgerIngredients />
			<BurgerConstructor />
		</main>
	);
};

export default MainContent;
