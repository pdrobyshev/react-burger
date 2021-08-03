import React, { FC } from 'react';

import { TIngredient } from '../../../services/slices/burger/burger';

import styles from './ingredients-list.module.scss';
import Ingredient from '../ingredient/ingredient';

interface IIngredientsListProps {
  ingredients: Array<TIngredient>;
}

const IngredientsList: FC<IIngredientsListProps> = ({ ingredients }) => (
  <ul className={styles.list}>
    {ingredients.map((ingredient) => (
      <Ingredient key={ingredient._id} ingredient={ingredient} />
    ))}
  </ul>
);

export default IngredientsList;
