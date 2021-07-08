import React from 'react';

import styles from './profile.module.scss';
import { ProfileNav } from '../../components/profile-nav/profile-nav';

export const Profile = () => (
  <div className={styles.flexWrapper}>
    <ProfileNav />
  </div>
);
