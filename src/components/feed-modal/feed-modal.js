import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getOrderInfo } from '../../services/slices/order';

import { OrderInfo } from '../order-info/order-info';
import Modal from '../modal/modal';

export const FeedModal = ({ onModalClose }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
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

FeedModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
