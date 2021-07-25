import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../../services/slices/feed';
import { ALL_ORDERS_URL } from '../../constants/api';

import styles from './feed.module.scss';
import { FeedList } from '../../components/feed-list/feed-list';
import { FeedStats } from '../../components/feed-stats/feed-stats';
import Loader from '../../components/loader/loader';

export const Feed = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.feed.orders);

  useEffect(() => {
    dispatch(WS_CONNECTION_START(ALL_ORDERS_URL));

    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch]);

  return (
    <div className={styles.feedWrapper}>
      {!orders.length && <Loader />}
      {!!orders.length && (
        <>
          <h1 className={`${styles.title}`}>Лента заказов</h1>

          <main className={`${styles.main}`}>
            <FeedList />

            <FeedStats />
          </main>
        </>
      )}
    </div>
  );
};
