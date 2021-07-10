import React from 'react';

import styles from './ingredient.module.scss';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

export const Ingredient = () => (
  <div className={styles.wrapper}>
    <IngredientDetails withTitle />
  </div>
);
