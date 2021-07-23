import React, { useEffect } from 'react';

import styles from './feed.module.scss';
import { FeedList } from '../../components/feed-list/feed-list';
import { FeedStats } from '../../components/feed-stats/feed-stats';

export const Feed = () => {
  useEffect(() => {
    //Этот экран доступен всем пользователям и должен обновляться в режиме реального времени, когда авторизованный пользователь создаёт заказ.
    // проверить на токен и создать соединение по вебсокету
  }, []);

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
