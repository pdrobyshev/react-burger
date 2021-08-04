import React, { FC } from 'react';
import { useSelector } from '../../services/store';

import styles from './burger-constructor.module.scss';
import Cart from './cart/cart';
import IngredientsList from './ingredients-list/ingredients-list';

const BurgerConstructor: FC = () => {
  const { constructorIngredients, bun } = useSelector((state) => state.burger);

  return (
    <div className={styles.content}>
      <IngredientsList />
      {bun || constructorIngredients.length ? <Cart /> : null}
    </div>
  );
};

export default BurgerConstructor;
