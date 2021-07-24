import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './feed-item.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import img from '../../images/done.png';

export const FeedItem = () => {
  const location = useLocation();

  return (
    <Link className={styles.item} to={location.pathname === '/feed' ? '/feed/123' : '/profile/orders/123'}>
      <div className={`${styles.flexWrapper}  mb-6`}>
        <span className={styles.order}>#034535</span>
        <span className={styles.datetime}>Сегодня, 16:20 i-GMT+3</span>
      </div>

      <span className={styles.name}>Death Star Starship Main бургер</span>

      <div className={styles.flexWrapper}>
        <ul className={styles.images}>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
          <li className={styles.imagesItem}>
            <img className={styles.image} src={img} alt="img" width="64" height="64" />
          </li>
        </ul>

        <div className={styles.priceWrapper}>
          <span className={styles.price}>480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};
