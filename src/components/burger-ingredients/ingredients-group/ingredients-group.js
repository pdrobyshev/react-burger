import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import IngredientsList from '../ingredients-list/ingredients-list';
import { BurgerContext } from '../../../context/burger';

const IngredientsGroup = ({ title, type }) => {
	const { ingredients } = useContext(BurgerContext);
	const buns = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'bun'), [ingredients]);
	const sauces = useMemo(
		() => ingredients.filter((ingredient) => ingredient.type === 'sauce'),
		[ingredients]
	);
	const main = useMemo(() => ingredients.filter((ingredient) => ingredient.type === 'main'), [ingredients]);

	let filteredIngredients;

	switch (type) {
		case 'bun':
			filteredIngredients = buns;
			break;
		case 'sauce':
			filteredIngredients = sauces;
			break;
		case 'main':
			filteredIngredients = main;
			break;
		default:
			filteredIngredients = [];
	}

	return (
		<>
			<h2 className="mb-6  text  text_type_main-medium">{title}</h2>
			<IngredientsList ingredients={filteredIngredients} />
		</>
	);
};

IngredientsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default IngredientsGroup;
