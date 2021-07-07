import React from 'react';

import styles from './logo-wrapper.module.scss';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const LogoWrapper = () => {
  return (
    <span className={`${styles.logo}  ml-4  mr-4`}>
      <Logo />
    </span>
  );
};

export default LogoWrapper;
