import React from 'react';

import styles from './feed-stats.module.scss';

export const FeedStats = () => (
  <section className={styles.feedStats}>
    <div className={styles.flexWrapper}>
      <div className={styles.orderNumbers}>
        <span className={styles.orderStatus}>Готовы:</span>
        <span className={`${styles.digits} ${styles.textGreen}`}>034533</span>
        <span className={`${styles.digits} ${styles.textGreen}`}>034533</span>
        <span className={`${styles.digits} ${styles.textGreen}`}>034533</span>
        <span className={`${styles.digits} ${styles.textGreen}`}>034533</span>
        <span className={`${styles.digits} ${styles.textGreen}`}>034533</span>
      </div>
      <div className={styles.orderNumbers}>
        <span className={styles.orderStatus}>В работе:</span>
        <span className={styles.digits}>034533</span>
        <span className={styles.digits}>034533</span>
        <span className={styles.digits}>034533</span>
      </div>
    </div>

    <div className={styles.totalWrapper}>
      <span className={styles.totalTitle}>Выполнено за все время:</span>
      <span className={`${styles.digits} ${styles.digitsLarge}`}>28 752</span>
    </div>

    <div className={styles.totalWrapper}>
      <span className={styles.totalTitle}>Выполнено за сегодня:</span>
      <span className={`${styles.digits} ${styles.digitsLarge}`}>138</span>
    </div>
  </section>
);
