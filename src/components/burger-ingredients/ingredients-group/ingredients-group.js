import React from 'react';
import PropTypes from 'prop-types';

import IngredientsList from '../ingredients-list/ingredients-list';

const IngredientsGroup = ({ title, ingredients }) => (
	<>
		<h2 className="mb-6  text  text_type_main-medium">{title}</h2>
		<IngredientsList ingredients={ingredients} />
	</>
);

const ingredientsPropTypes = PropTypes.shape({
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
});

IngredientsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default IngredientsGroup;
