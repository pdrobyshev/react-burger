import React from 'react';

import styles from './not-found.module.scss';

export const NotFound404 = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>404</h1>
    <span className={styles.text}>Страница не найдена</span>
  </div>
);
