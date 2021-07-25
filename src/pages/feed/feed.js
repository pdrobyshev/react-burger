import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../../services/slices/feed';

import styles from './feed.module.scss';
import { FeedList } from '../../components/feed-list/feed-list';
import { FeedStats } from '../../components/feed-stats/feed-stats';

export const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WS_CONNECTION_START());

    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch]);

  return (
    <div className={styles.feedWrapper}>
      <h1 className={`${styles.title}`}>Лента заказов</h1>

      <main className={`${styles.main}`}>
        <FeedList />

        <FeedStats />
      </main>
    </div>
  );
};
