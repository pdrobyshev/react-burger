import React from 'react';

import styles from './feed-order.module.scss';

export const FeedOrder = () => (
  <section className={styles.wrapper}>
    {/*{withTitle && <h2 className={styles.title}>Детали ингредиента</h2>}*/}
    <h2 className={styles.title}>Детали ингредиента</h2>

    <img className={`${styles.image}  mb-4`} src={image_large} alt={name} width={480} height={240} />

    <span className={`${styles.name}  mb-8`}>{name}</span>

    <section className={styles.flexWrapper}>
      <div className="mr-5">
        <span className={`${styles.text}  text_type_main-default  mb-2`}>Калории,ккал</span>
        <span className={`${styles.text}  ${styles.amount}`}>{calories}</span>
      </div>
      <div className="mr-5">
        <span className={`${styles.text}  text_type_main-default  mb-2`}>Белки, г</span>
        <span className={`${styles.text}  ${styles.amount}`}>{proteins}</span>
      </div>
      <div className="mr-5">
        <span className={`${styles.text}  text_type_main-default  mb-2`}>Жиры, г</span>
        <span className={`${styles.text}  ${styles.amount}`}>{fat}</span>
      </div>
      <div>
        <span className={`${styles.text}  text_type_main-default  mb-2`}>Углеводы, г</span>
        <span className={`${styles.text}  ${styles.amount}`}>{carbohydrates}</span>
      </div>
    </section>
  </section>
);
