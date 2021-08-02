import React, { FC } from 'react';

import styles from './profile-link.module.scss';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../../link-item/link-item';

const ProfileLink: FC = () => (
  <div className={styles.profile}>
    <LinkItem Icon={ProfileIcon} text="Личный кабинет" to="/profile" />
  </div>
);

export default ProfileLink;
