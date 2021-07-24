import React from 'react';

import styles from './feed-order.module.scss';
import { OrderInfo } from '../../components/order-info/order-info';

export const FeedOrder = () => (
  <div className={styles.wrapper}>
    <span className={styles.number}>#034533</span>

    <OrderInfo />
  </div>
);
