import React from 'react';

import styles from './nav.module.scss';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../../link-item/link-item';
import LogoWrapper from '../logo-wrapper/logo-wrapper';
import Profile from '../profile-link/profile-link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <LinkItem Icon={BurgerIcon} text="Конструктор" to="/" />
        </li>
        <li className={styles.item}>
          <LinkItem Icon={ListIcon} text="Лента заказов" to="feed" />
        </li>
      </ul>

      <LogoWrapper />

      <Profile />
    </nav>
  );
};

export default Nav;
