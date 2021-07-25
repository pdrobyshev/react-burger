import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getDateTime } from '../../utils';

import styles from './order-info.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderInfo = () => {
  const { ingredients } = useSelector((state) => state.burger);
  const order = useSelector((state) => state.order.order);
  const { name, status, ingredients: orderIngredients, createdAt } = order;

  const time = getDateTime(createdAt);

  const feedOrderIngredients = useMemo(() => {
    return ingredients.filter((ingredient) => orderIngredients.includes(ingredient._id));
  }, [orderIngredients, ingredients]);

  const price = useMemo(() => {
    return feedOrderIngredients.reduce((acc, el) => acc + el.price, 0);
  }, [feedOrderIngredients]);

  return (
    <section>
      <h2 className={`${styles.title}  mb-3`}>{name}</h2>
      <span className={styles.status}>{status === 'done' ? 'Выполнен' : 'В работе'}</span>

      <span className={`${styles.title}  mb-6`}>Состав:</span>

      <ul className={`${styles.list} scroll`}>
        {feedOrderIngredients.map(({ _id, image_mobile, name, price }) => (
          <li className={styles.item} key={_id}>
            <span className={styles.imgWrapper}>
              <img className={styles.img} src={image_mobile} alt={name} width="64" height="64" />
            </span>
            <span className={styles.ingredient}>{name}</span>

            <div className={styles.flexWrapper}>
              <span>1</span>x<span>{price}</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <span className={styles.datetime}>{time}</span>
        <span className={styles.price}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
    </section>
  );
};
