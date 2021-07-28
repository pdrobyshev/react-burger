import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo-wrapper.module.scss';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const LogoWrapper = () => (
  <Link className={styles.logo} to="/">
    <Logo />
  </Link>
);

export default LogoWrapper;
