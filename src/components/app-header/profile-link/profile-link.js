import React from 'react';
import { useSelector } from 'react-redux';

import styles from './profile-link.module.scss';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../../link-item/link-item';

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className={styles.profile}>
      {isLoggedIn ? (
        <LinkItem Icon={ProfileIcon} text="Личный кабинет" to="/profile" />
      ) : (
        <LinkItem Icon={ProfileIcon} text="Войти" to="/login" />
      )}
    </div>
  );
};

export default Profile;
