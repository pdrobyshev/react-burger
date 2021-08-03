import React, { FC, useEffect } from 'react';
import { useDrop } from 'react-dnd';

import {
  addConstructorBun,
  addConstructorIngredient,
  TIngredient,
} from '../../../services/slices/burger/burger';
import { setOrderElementsIds } from '../../../services/slices/order/order';
import { useDispatch, useSelector } from '../../../services/store';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsList: FC = () => {
  const dispatch = useDispatch();
  const { constructorIngredients, bun } = useSelector((state) => state.burger);

  useEffect(() => {
    const order = constructorIngredients.map((ingredient: TIngredient) => ingredient._id);
    bun && order.push(bun._id);
    order.length && dispatch(setOrderElementsIds(order));
  }, [dispatch, constructorIngredients, bun]);

  const handleDrop = (item: TIngredient) => {
    if (item.type === 'bun') {
      dispatch(addConstructorBun(item));
    } else {
      dispatch(addConstructorIngredient(item));
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: TIngredient) {
      handleDrop(item);
    },
  });

  const backgroundColor = isHover && 'rgba(133, 133, 173, 0.5)';

  const burgerElementsList = constructorIngredients.map((ingredient: TIngredient, index: number) => {
    const { constructorIngredientId, name, image, price } = ingredient;
    return (
      <BurgerElement
        key={constructorIngredientId}
        draggable={true}
        text={name}
        thumbnail={image}
        price={price}
        id={constructorIngredientId}
        idx={index}
      />
    );
  });

  const constructorContent =
    bun || constructorIngredients.length ? (
      <>
        {bun && (
          <div className={styles.bun}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              thumbnail={bun.image}
              price={bun.price}
            />
          </div>
        )}

        <ul className={`${styles.ingredientsWrapper}  ${styles.scrollHeight}  scroll  pr-2`}>
          {burgerElementsList}
        </ul>

        {bun && (
          <div className={styles.bun}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              thumbnail={bun.image}
              price={bun.price}
            />
          </div>
        )}
      </>
    ) : (
      <h2 className={styles.title}>Перетащите ингредиенты в эту область</h2>
    );

  return (
    <section
      className={`${styles.ingredientsWrapper}  ${styles.fixedHeight}  mb-10`}
      style={{ backgroundColor } as React.CSSProperties}
      ref={dropTarget}
    >
      {constructorContent}
    </section>
  );
};

export default IngredientsList;
