import React from 'react';

import styles from './feed.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import img from '../images/done.png';

export const Feed = () => (
  <>
    <h1 className={`${styles.title}  text text_type_main-large  mt-10  mb-5`}>Лента заказов</h1>

    <main className={`${styles.main}  ${styles.mainOrders}  pl-4  pr-4`}>
      <ul className={`${styles.orders}`}>
        <li className={`${styles.ordersItem}`}>
          <div className={`${styles.itemFlexWrapper}  mb-6`}>
            <span className={`${styles.itemOrder}`}>#034535</span>
            <span className={`${styles.itemTime}`}>Сегодня, 16:20 i-GMT+3</span>
          </div>

          <span className={`${styles.itemName}`}>Death Star Starship Main бургер</span>

          <div className={`${styles.itemFlexWrapper}`}>
            <div>
              <img className={`${styles.itemImg}`} src={img} alt="img" width="64" height="64" />
              <img className={`${styles.itemImg}`} src={img} alt="img" width="64" height="64" />
              <img className={`${styles.itemImg}`} src={img} alt="img" width="64" height="64" />
              <img className={`${styles.itemImg}`} src={img} alt="img" width="64" height="64" />
            </div>
            <div className={`${styles.itemPriceWrapper}`}>
              <span className={`${styles.itemPrice}`}>480</span>
              <CurrencyIcon />
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.ordersInfo}>
        <div className={styles.flexWrapper}>
          <div className={styles.ordersList}>
            <span className={`${styles.text}  text  text_type_main-medium  mb-6`}>Готовы:</span>
            <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>
              034533
            </span>
            <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>
              034533
            </span>
            <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>
              034533
            </span>
            <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>
              034533
            </span>
            <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>
              034533
            </span>
          </div>
          <div className={styles.ordersList}>
            <span className={`${styles.text}  text  text_type_main-medium  mb-6`}>В работе:</span>
            <span className={`${styles.text}  text  text_type_digits-default`}>034533</span>
            <span className={`${styles.text}  text  text_type_digits-default`}>034533</span>
            <span className={`${styles.text}  text  text_type_digits-default`}>034533</span>
          </div>
        </div>

        <span className={`${styles.displayBlock}  text  text_type_main-medium`}>Выполнено за все время:</span>
        <span className={`${styles.displayBlock}  ${styles.digits}  text  text_type_digits-large  mb-10`}>
          28 752
        </span>

        <span className={`${styles.displayBlock}  text  text_type_main-medium`}>Выполнено за сегодня:</span>
        <span className={`${styles.displayBlock}  ${styles.digits}  text  text_type_digits-large`}>138</span>
      </div>
    </main>
  </>
);
