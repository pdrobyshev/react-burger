import React from 'react';

import styles from './burger-ingredients.module.scss';
import Tabs from './tabs/tabs';
import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = ({ buns, sauces, main }) => (
	<section className={`${styles.content}  mt-10`}>
		<h1 className="text  text_type_main-large  mb-5">Соберите бургер</h1>

		<Tabs />

		<section className={`${styles.ingredientsWrapper}  scroll`}>
			<IngredientsGroup title="Булки" ingredients={buns} />
			<IngredientsGroup title="Соусы" ingredients={sauces} />
			<IngredientsGroup title="Начинки" ingredients={main} />
		</section>
	</section>
);

export default BurgerIngredients;
