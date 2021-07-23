import React from 'react';

import styles from './feed-stats.module.scss';

export const FeedStats = () => (
  <section className={styles.feedStats}>
    <div className={styles.flexWrapper}>
      <div className={styles.ordersList}>
        <span className={`${styles.textTitle}`}>Готовы:</span>
        <span className={`${styles.smallDigits}  ${styles.textGreen}`}>034533</span>
        <span className={`${styles.smallDigits}  ${styles.textGreen}`}>034533</span>
        <span className={`${styles.smallDigits}  ${styles.textGreen}`}>034533</span>
        <span className={`${styles.smallDigits}  ${styles.textGreen}`}>034533</span>
        <span className={`${styles.smallDigits}  ${styles.textGreen}`}>034533</span>
      </div>
      <div className={styles.ordersList}>
        <span className={`${styles.textTitle}`}>В работе:</span>
        <span className={`${styles.smallDigits}`}>034533</span>
        <span className={`${styles.smallDigits}`}>034533</span>
        <span className={`${styles.smallDigits}`}>034533</span>
      </div>
    </div>

    <div className={styles.totalWrapper}>
      <span className={`${styles.totalTitle}`}>Выполнено за все время:</span>
      <span className={`${styles.digits}`}>28 752</span>
    </div>

    <div className={styles.totalWrapper}>
      <span className={`${styles.totalTitle}`}>Выполнено за сегодня:</span>
      <span className={`${styles.digits}`}>138</span>
    </div>
  </section>
);
