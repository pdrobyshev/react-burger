import React from 'react';

import styles from './order-info.module.scss';
import img from '../../images/done.png';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderInfo = () => (
  <section>
    <h2 className={`${styles.title}  mb-3`}>Black Hole Singularity острый бургер</h2>
    <span className={styles.status}>Выполнен</span>

    <span className={`${styles.title}  mb-6`}>Состав:</span>

    <ul className={`${styles.list} scroll`}>
      <li className={styles.item}>
        <span className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="img" width="64" height="64" />
        </span>
        <span className={styles.ingredient}>Флюоресцентная булка R2-D3</span>

        <div className={styles.flexWrapper}>
          <span>2</span>x<span>20</span>
          <CurrencyIcon type="primary" />
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="img" width="64" height="64" />
        </span>
        <span className={styles.ingredient}>Филе Люминесцентного тетраодонтимформа</span>

        <div className={styles.flexWrapper}>
          <span>1</span>x<span>300</span>
          <CurrencyIcon type="primary" />
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="img" width="64" height="64" />
        </span>
        <span className={styles.ingredient}>Соус традиционный галактический</span>

        <div className={styles.flexWrapper}>
          <span>2</span>x<span>20</span>
          <CurrencyIcon type="primary" />
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="img" width="64" height="64" />
        </span>
        <span className={styles.ingredient}>Плоды фалленианского дерева</span>

        <div className={styles.flexWrapper}>
          <span>2</span>x<span>20</span>
          <CurrencyIcon type="primary" />
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt="img" width="64" height="64" />
        </span>
        <span className={styles.ingredient}>Флюоресцентная булка R2-D3</span>

        <div className={styles.flexWrapper}>
          <span>2</span>x<span>20</span>
          <CurrencyIcon type="primary" />
        </div>
      </li>
    </ul>

    <div className={styles.total}>
      <span className={styles.datetime}>Вчера, 13:50 i-GMT+3</span>
      <span className={styles.price}>510</span>
      <CurrencyIcon type="primary" />
    </div>
  </section>
);
