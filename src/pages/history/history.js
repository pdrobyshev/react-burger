import React from 'react';

import styles from '../profile/profile.module.scss';
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import { FeedList } from '../../components/feed-list/feed-list';

export const History = () => (
  <div className={styles.flexWrapper}>
    <ProfileNav />
    <FeedList />
  </div>
);
