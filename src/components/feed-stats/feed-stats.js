import React from 'react';

import styles from './feed-stats.module.scss';

export const FeedStats = () => (
  <div className={styles.ordersInfo}>
    <div className={styles.flexWrapper}>
      <div className={styles.ordersList}>
        <span className={`${styles.text}  text  text_type_main-medium  mb-6`}>Готовы:</span>
        <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>034533</span>
        <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>034533</span>
        <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>034533</span>
        <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>034533</span>
        <span className={`${styles.text}  ${styles.textGreen}  text  text_type_digits-default`}>034533</span>
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
);
