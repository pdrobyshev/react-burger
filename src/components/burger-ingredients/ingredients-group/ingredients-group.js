import React from 'react';
import PropTypes from 'prop-types';

import IngredientsList from '../ingredients-list/ingredients-list';

const IngredientsGroup = ({ title, ingredients, onIngredientModalOpen }) => (
	<>
		<h2 className="mb-6  text  text_type_main-medium">{title}</h2>
		<IngredientsList ingredients={ingredients} onIngredientModalOpen={onIngredientModalOpen} />
	</>
);

IngredientsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
	onIngredientModalOpen: PropTypes.func.isRequired,
};

export default IngredientsGroup;
