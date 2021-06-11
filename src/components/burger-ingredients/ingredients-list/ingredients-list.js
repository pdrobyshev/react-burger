import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredients-list.module.scss';
import Ingredient from '../ingredient/ingredient';

const IngredientsList = ({ ingredients }) => (
	<ul className={`${styles.list}  pt-6  pl-4  pr-2`}>
		{ingredients.map((ingredient) => (
			<Ingredient key={ingredient._id} ingredient={ingredient} />
		))}
	</ul>
);

IngredientsList.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IngredientsList;
