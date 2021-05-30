import React from 'react';

import styles from './ingredients-list.module.scss';
import Ingredient from '../ingredient/ingredient';

const IngredientsList = ({ ingredients, onIngredientModalOpen }) => (
	<ul className={`${styles.list}  pt-6  pl-4  pr-2`}>
		{ingredients.map((ingredient) => (
			<Ingredient
				key={ingredient._id}
				ingredient={ingredient}
				onIngredientModalOpen={onIngredientModalOpen}
			/>
		))}
	</ul>
);

export default IngredientsList;
