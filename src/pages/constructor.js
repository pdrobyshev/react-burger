import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIngredients } from '../services/slices/burger';
import { closeIngredientModal, closeOrderModal } from '../services/slices/modals';

import ConstructorContent from '../components/constructor-content/constructor-content';
import Error from '../components/error/error';
import Loader from '../components/loader/loader';
import Modal from '../components/modal/modal';
import OrderDetails from '../components/order-details/order-details';
import IngredientDetails from '../components/ingredient-details/ingredient-details';

export const Constructor = () => {
  const dispatch = useDispatch();
  const { orderId } = useSelector((state) => state.order);
  const { hasError, isLoading } = useSelector((state) => state.burger);
  const { currentIngredient, isIngredientModalOpened, isOrderModalOpened } = useSelector(
    (state) => state.modals
  );

  const onIngredientModalClose = () => dispatch(closeIngredientModal());
  const onOrderModalClose = () => dispatch(closeOrderModal());

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const content = hasError ? <Error /> : <ConstructorContent />;

  return (
    <>
      {isLoading ? <Loader /> : content}

      {isOrderModalOpened && orderId && (
        <Modal onModalClose={onOrderModalClose}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}

      {isIngredientModalOpened && currentIngredient && (
        <Modal title="Детали ингредиента" onModalClose={onIngredientModalClose}>
          <IngredientDetails {...currentIngredient} />
        </Modal>
      )}
    </>
  );
};
