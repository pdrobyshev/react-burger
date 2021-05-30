import React from 'react';

import styles from './burger-ingredients.module.scss';
import Tabs from './tabs/tabs';
import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = ({ buns, sauces, main, onIngredientModalOpen }) => (
	<section className={`${styles.content}  mt-10`}>
		<h1 className="text  text_type_main-large  mb-5">Соберите бургер</h1>

		<Tabs />

		<section className={`${styles.ingredientsWrapper}  scroll`}>
			<IngredientsGroup title="Булки" ingredients={buns} onIngredientModalOpen={onIngredientModalOpen} />
			<IngredientsGroup title="Соусы" ingredients={sauces} onIngredientModalOpen={onIngredientModalOpen} />
			<IngredientsGroup title="Начинки" ingredients={main} onIngredientModalOpen={onIngredientModalOpen} />
		</section>
	</section>
);

export default BurgerIngredients;
