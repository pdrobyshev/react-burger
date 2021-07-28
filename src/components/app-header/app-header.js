import React from 'react';

import styles from './app-header.module.scss';
import Nav from './nav/nav';

const AppHeader = () => (
  <header className={styles.header}>
    <Nav />
  </header>
);

export default AppHeader;
