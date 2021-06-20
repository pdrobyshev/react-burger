import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import IngredientsList from '../ingredients-list/ingredients-list';

const IngredientsGroup = React.forwardRef(({ title, type }, ref) => {
	const { ingredients } = useSelector((store) => store.burger);
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
		<div ref={ref} className="mb-10">
			<h2 className="mb-6  text  text_type_main-medium">{title}</h2>
			<IngredientsList ingredients={filteredIngredients} />
		</div>
	);
});

IngredientsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default IngredientsGroup;
