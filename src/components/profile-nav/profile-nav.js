import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logoutRequest } from '../../services/slices/auth/auth';

import styles from './profile-nav.module.scss';

export const ProfileNav = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };

  return (
    <section className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link} activeClassName={styles.activeLink} to="/profile" exact>
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} activeClassName={styles.activeLink} to="/profile/orders">
            История заказов
          </NavLink>
        </li>
        <li>
          {isLoading ? (
            <button className={`${styles.link} ${styles.button}`}>Идёт запрос...</button>
          ) : (
            <button className={`${styles.link} ${styles.button}`} onClick={onLogoutClick}>
              Выход
            </button>
          )}
        </li>
      </ul>

      <p className={styles.info}>
        В этом разделе вы можете
        <br /> изменить свои персональные данные
      </p>
    </section>
  );
};
