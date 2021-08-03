import React, { FC, useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

import { useSelector } from '../../../services/store';
import { TIngredient } from '../../../services/slices/burger/types';

import styles from './ingredient.module.scss';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IIngredientProps {
  ingredient: TIngredient;
}

const Ingredient: FC<IIngredientProps> = ({ ingredient }) => {
  const { image, price, name, _id } = ingredient;
  const location = useLocation();
  const { constructorIngredients, bun } = useSelector((state) => state.burger);

  const counters = useMemo(() => {
    const counter: { [name: string]: number } = {};

    constructorIngredients.forEach((ingredient: TIngredient) => {
      if (!counter[ingredient._id]) counter[ingredient._id] = 0;
      counter[ingredient._id]++;
    });

    if (bun) counter[bun._id] = 2;

    return counter;
  }, [constructorIngredients, bun]);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.25 : 1;

  return (
    <li className={styles.item} style={{ opacity }} ref={dragRef}>
      {counters[ingredient._id] && <Counter count={counters[ingredient._id]} size="default" />}

      <Link className={styles.link} to={{ pathname: `/ingredients/${_id}`, state: { background: location } }}>
        <>
          <div className={styles.ingredient}>
            <img className={styles.image} src={image} alt={name} />

            <div className={styles.priceWrapper}>
              <span className={styles.price}>{price}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>

          <span className={styles.name}>{name}</span>
        </>
      </Link>
    </li>
  );
};

export default Ingredient;
