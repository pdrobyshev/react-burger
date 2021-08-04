import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';

import { getOrderInfo } from '../../services/slices/order/order';

import { OrderInfo } from '../order-info/order-info';
import Modal from '../modal/modal';

interface IFeedModalProps {
  onModalClose: () => void;
}

export const FeedModal: FC<IFeedModalProps> = ({ onModalClose }) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const order = useSelector((state) => state.order.order);

  useEffect(() => {
    dispatch(getOrderInfo(id));
  }, [dispatch, id]);

  return (
    order && (
      <Modal orderNumber={order.number} onModalClose={onModalClose}>
        <OrderInfo />
      </Modal>
    )
  );
};
