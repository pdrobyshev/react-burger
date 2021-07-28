import React from 'react';

import styles from './feed-stats.module.scss';
import { useSelector } from 'react-redux';

export const FeedStats = () => {
  const { total, totalToday, orders } = useSelector((state) => state.feed);
  const doneOrders = [];
  const inProgressOrders = [];

  orders
    .slice(0, 20)
    .forEach((el) => (el.status === 'done' ? doneOrders.push(el) : inProgressOrders.push(el)));

  return (
    <section className={styles.feedStats}>
      <div className={styles.flexWrapper}>
        <div className={styles.orderNumbers}>
          <span className={styles.orderStatus}>Готовы:</span>
          <ul className={styles.list}>
            {doneOrders.map(({ _id, number }) => (
              <li key={_id} className={`${styles.digits} ${styles.textGreen}`}>
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.orderNumbers}>
          <span className={styles.orderStatus}>В работе:</span>
          <ul className={styles.list}>
            {inProgressOrders.map(({ _id, number }) => (
              <li key={_id} className={styles.digits}>
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.totalWrapper}>
        <span className={styles.totalTitle}>Выполнено за все время:</span>
        <span className={`${styles.digits} ${styles.digitsLarge}`}>{total}</span>
      </div>

      <div className={styles.totalWrapper}>
        <span className={styles.totalTitle}>Выполнено за сегодня:</span>
        <span className={`${styles.digits} ${styles.digitsLarge}`}>{totalToday}</span>
      </div>
    </section>
  );
};
