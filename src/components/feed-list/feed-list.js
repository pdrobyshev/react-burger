import React from 'react';

import styles from './feed-list.module.scss';
import { FeedItem } from '../feed-item/feed-item';
import { useSelector } from 'react-redux';

export const FeedList = () => {
  const orders = useSelector((state) => state.feed.orders);

  return (
    orders && (
      <ul className={`${styles.list}  scroll`}>
        {orders.map((order) => (
          <FeedItem key={order._id} {...order} />
        ))}
      </ul>
    )
  );
};
