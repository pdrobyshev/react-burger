import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../services/store';

import { createOrder } from '../../../services/slices/order/order';
import { TIngredient } from '../../../services/slices/burger/types';

import styles from './cart.module.scss';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const { constructorElementsIds, isLoading } = useSelector((state) => state.order);
  const { constructorIngredients, bun } = useSelector((state) => state.burger);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();

  const totalPrice = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = constructorIngredients
      ? constructorIngredients.reduce((acc: number, el: TIngredient) => acc + el.price, 0)
      : 0;
    return ingredientsPrice + bunPrice;
  }, [constructorIngredients, bun]);

  const payload = {
    ingredients: constructorElementsIds,
  };

  const onOrderBtnClick = () => {
    isLoggedIn ? dispatch(createOrder(payload)) : history.replace('/login');
  };

  const orderBtn = (
    <Button type="primary" size="large" onClick={onOrderBtnClick}>
      Оформить заказ
    </Button>
  );

  return (
    <section className={styles.totalWrapper}>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      {isLoading ? <span className={styles.loader}>Оформляем заказ</span> : bun && orderBtn}
    </section>
  );
};

export default Cart;
