import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';

import { getDateTime } from '../../utils';
import { TOrderObject } from '../../services/slices/feed/types';
import { TIngredient } from '../../services/slices/burger/types';

import styles from './feed-item.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const FeedItem: FC<TOrderObject> = ({
  _id,
  number,
  name,
  ingredients: orderIngredients,
  createdAt,
}) => {
  const location = useLocation();
  const { ingredients } = useSelector((state) => state.burger);

  const time = getDateTime(createdAt);

  const feedOrderIngredients = useMemo(() => {
    return ingredients.filter((ingredient: TIngredient) => orderIngredients.includes(ingredient._id));
  }, [orderIngredients, ingredients]);

  const showImages = (feedOrderIngredients: Array<TIngredient>) => {
    const images = [];

    for (let i = 0; i < feedOrderIngredients.length; i++) {
      const ing = feedOrderIngredients[i];

      if (feedOrderIngredients.length > 5 && i === 5) {
        images.push(
          <li className={styles.imagesItem} key={ing._id}>
            <img className={styles.image} src={ing.image_mobile} alt={ing.name} width="64" height="64" />
            <span className={styles.count}>+{feedOrderIngredients.length - 5}</span>
          </li>
        );
      } else {
        images.push(
          <li className={styles.imagesItem} key={ing._id}>
            <img className={styles.image} src={ing.image_mobile} alt={ing.name} width="64" height="64" />
          </li>
        );
      }
    }

    return images;
  };

  const price = useMemo(() => {
    return feedOrderIngredients.reduce(
      (acc: number, el: TIngredient) => (el.type === 'bun' ? acc + el.price * 2 : acc + el.price),
      0
    );
  }, [feedOrderIngredients]);

  return (
    <>
      {feedOrderIngredients.length && price && (
        <li>
          <Link
            className={styles.item}
            to={{
              pathname: location.pathname === '/feed' ? `/feed/${number}` : `/profile/orders/${number}`,
              state: { background: location },
            }}
          >
            <div className={`${styles.flexWrapper}  mb-6`}>
              <span className={styles.order}>#{number}</span>
              <span className={styles.datetime}>{time}</span>
            </div>

            <span className={styles.name}>{name}</span>

            <div className={styles.flexWrapper}>
              <ul className={styles.images}>{showImages(feedOrderIngredients)}</ul>

              <div className={styles.priceWrapper}>
                <span className={styles.price}>{price}</span>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </Link>
        </li>
      )}
    </>
  );
};
