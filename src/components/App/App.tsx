import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { data } from '../../utils/data';

const App = () => {
	return (
		<>
			<AppHeader />
			<BurgerIngredients />
			<BurgerConstructor />
		</>
	);
};

export default App;
