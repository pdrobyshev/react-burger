import React from 'react';

import styles from './feed-list.module.scss';
import { FeedItem } from '../feed-item/feed-item';

export const FeedList = () => (
  <ul className={`${styles.list}  scroll`}>
    <FeedItem />
    <FeedItem />
    <FeedItem />
    <FeedItem />
    <FeedItem />
    <FeedItem />
  </ul>
);
