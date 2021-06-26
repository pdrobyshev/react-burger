import React from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './burger-ingredients.module.scss';
import Tabs from './tabs/tabs';
import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = () => {
  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0 });

  return (
    <section className={`${styles.content}  mt-10`}>
      <h1 className="text  text_type_main-large  mb-5">Соберите бургер</h1>

      <Tabs inViewBuns={inViewBuns} inViewSauces={inViewSauces} inViewMains={inViewMains} />

      <section className={`${styles.ingredientsWrapper}  scroll`}>
        <IngredientsGroup title="Булки" type="bun" groupId="buns" ref={bunsRef} />
        <IngredientsGroup title="Соусы" type="sauce" groupId="sauces" ref={saucesRef} />
        <IngredientsGroup title="Начинки" type="main" groupId="main" ref={mainsRef} />
      </section>
    </section>
  );
};

export default BurgerIngredients;
