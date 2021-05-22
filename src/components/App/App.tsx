import React from 'react';
import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { data } from '../../utils/data';

const App = () => {
	return (
		<div className={styles.app}>
			<AppHeader />

			<BurgerIngredients />
			<BurgerConstructor />
		</div>
	);
};

export default App;
