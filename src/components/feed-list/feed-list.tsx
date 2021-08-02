import React, { FC } from 'react';
import { useSelector } from '../../services/store';

import styles from './feed-list.module.scss';
import { FeedItem } from '../feed-item/feed-item';

export const FeedList: FC = () => {
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
