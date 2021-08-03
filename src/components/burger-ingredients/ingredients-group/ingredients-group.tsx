import React, { useMemo } from 'react';
import { useSelector } from '../../../services/store';

import { TIngredient } from '../../../services/slices/burger/types';

import IngredientsList from '../ingredients-list/ingredients-list';

interface IIngredientsGroupProps {
  title: string;
  type: string;
  groupId: string;
}

const IngredientsGroup = React.forwardRef<HTMLDivElement, IIngredientsGroupProps>(
  ({ title, type, groupId }, ref) => {
    const ingredients = useSelector((state) => state.burger.ingredients);
    const buns = useMemo(
      () => ingredients.filter((ingredient: TIngredient) => ingredient.type === 'bun'),
      [ingredients]
    );
    const sauces = useMemo(
      () => ingredients.filter((ingredient: TIngredient) => ingredient.type === 'sauce'),
      [ingredients]
    );
    const main = useMemo(
      () => ingredients.filter((ingredient: TIngredient) => ingredient.type === 'main'),
      [ingredients]
    );

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
      <div className="mb-10" id={groupId} ref={ref}>
        <h2 className="mb-6  text  text_type_main-medium">{title}</h2>
        <IngredientsList ingredients={filteredIngredients} />
      </div>
    );
  }
);

export default IngredientsGroup;
