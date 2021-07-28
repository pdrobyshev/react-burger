import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WS_CONNECTION_CLOSE, WS_CONNECTION_START } from '../../services/slices/feed';
import { WS_URL } from '../../constants/api';
import { getCookie } from '../../utils/cookie';

import styles from '../profile/profile.module.scss';
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import { FeedList } from '../../components/feed-list/feed-list';
import Loader from '../../components/loader/loader';

export const History = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.feed.orders);

  useEffect(() => {
    dispatch(WS_CONNECTION_START(`${WS_URL}?token=${getCookie('accessToken')}`));

    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch]);

  return (
    <div className={styles.flexWrapper}>
      <ProfileNav />
      {!orders.length && <Loader />}
      {!!orders.length && <FeedList />}
    </div>
  );
};
