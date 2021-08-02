import React, { FC } from 'react';

import styles from './app-header.module.scss';
import Nav from './nav/nav';

const AppHeader: FC = () => (
  <header className={styles.header}>
    <Nav />
  </header>
);

export default AppHeader;
