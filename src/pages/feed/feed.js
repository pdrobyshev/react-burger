import React from 'react';

import styles from './feed.module.scss';
import { FeedList } from '../../components/feed-list/feed-list';
import { FeedStats } from '../../components/feed-stats/feed-stats';

export const Feed = () => (
  <div className={styles.feedWrapper}>
    <h1 className={`${styles.title}`}>Лента заказов</h1>

    <main className={`${styles.main}`}>
      <FeedList />

      <FeedStats />
    </main>
  </div>
);
