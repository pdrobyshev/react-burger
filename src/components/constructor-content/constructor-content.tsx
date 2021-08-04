import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from './constructor-content.module.scss';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const ConstructorContent: FC = () => (
  <main className={`${styles.main}  pl-5  pr-5`}>
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor />
    </DndProvider>
  </main>
);

export default ConstructorContent;
