import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getOrderInfo } from '../../services/slices/order/order';

import styles from './feed-order.module.scss';
import { OrderInfo } from '../../components/order-info/order-info';

export const FeedOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.order.order);

  useEffect(() => {
    dispatch(getOrderInfo(id));
  }, [dispatch, id]);

  return (
    <div className={styles.wrapper}>
      {order && (
        <>
          <span className={styles.number}>#{order.number}</span>
          <OrderInfo />
        </>
      )}
    </div>
  );
};
