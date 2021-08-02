import React, { useMemo } from 'react';
import { useSelector } from '../../services/store';

import { getDateTime } from '../../utils';
import { TIngredient } from '../../services/slices/burger/burger';
import { TOrderInfo } from '../../services/slices/order/order';

import styles from './order-info.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderInfo = () => {
  const { ingredients } = useSelector((state) => state.burger);
  const order = useSelector((state) => state.order.order);
  const { name, status, ingredients: orderIngredients, createdAt } = order as TOrderInfo;

  const time = getDateTime(createdAt);

  const feedOrderIngredients = useMemo(() => {
    return ingredients.filter((ingredient: TIngredient) => orderIngredients.includes(ingredient._id));
  }, [orderIngredients, ingredients]);

  const price = useMemo(() => {
    return feedOrderIngredients.reduce(
      (acc: number, el: TIngredient) => (el.type === 'bun' ? acc + el.price * 2 : acc + el.price),
      0
    );
  }, [feedOrderIngredients]);

  return (
    <section>
      <h2 className={`${styles.title}  mb-3`}>{name}</h2>
      <span className={styles.status}>{status === 'done' ? 'Выполнен' : 'В работе'}</span>

      <span className={`${styles.title}  mb-6`}>Состав:</span>

      <ul className={`${styles.list} scroll`}>
        {feedOrderIngredients.map(({ _id, image_mobile, name, price, type }: TIngredient) => (
          <li className={styles.item} key={_id}>
            <span className={styles.imgWrapper}>
              <img className={styles.img} src={image_mobile} alt={name} width="64" height="64" />
            </span>
            <span className={styles.ingredient}>{name}</span>

            <div className={styles.flexWrapper}>
              <span>{type === 'bun' ? 2 : 1}</span>x<span>{price}</span>
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
