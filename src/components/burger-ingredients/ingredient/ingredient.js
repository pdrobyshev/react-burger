import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import { openIngredientModal } from '../../../services/slices/modals';

import styles from './ingredient.module.scss';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = ({ ingredient }) => {
  const { image, price, name } = ingredient;
  const dispatch = useDispatch();
  const { constructorIngredients, bun } = useSelector((state) => state.burger);

  const counters = useMemo(() => {
    const counter = {};

    constructorIngredients.forEach((ingredient) => {
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

  const handleClick = () => dispatch(openIngredientModal(ingredient));

  return (
    <li className={styles.item} style={{ opacity }} onClick={handleClick} ref={dragRef}>
      {counters[ingredient._id] && <Counter count={counters[ingredient._id]} size="default" />}

      <div className="pl-4  pr-4  mb-1">
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.price}>
          <span className="text  text_type_digits-default  mr-2">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>

      <span className={`${styles.name}  text  text_type_main-default`}>{name}</span>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Ingredient;
