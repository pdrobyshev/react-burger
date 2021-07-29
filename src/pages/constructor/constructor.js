import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeOrderModal } from '../../services/slices/order/order';

import ConstructorContent from '../../components/constructor-content/constructor-content';
import Error from '../../components/error/error';
import Modal from '../../components/modal/modal';
import OrderDetails from '../../components/order-details/order-details';

export const Constructor = () => {
  const dispatch = useDispatch();
  const { orderId } = useSelector((state) => state.order);
  const { hasError, isLoading } = useSelector((state) => state.burger);
  const { isOrderModalOpened } = useSelector((state) => state.order);

  const onOrderModalClose = () => dispatch(closeOrderModal());

  const content = hasError ? <Error /> : <ConstructorContent />;

  return (
    <>
      {!isLoading && content}

      {isOrderModalOpened && orderId && (
        <Modal onModalClose={onOrderModalClose}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}
    </>
  );
};
