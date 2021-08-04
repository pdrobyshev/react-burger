import React, { FC } from 'react';

import styles from './profile.module.scss';
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import { ProfileForm } from '../../components/profile-form/profile-form';

export const Profile: FC = () => (
  <div className={styles.flexWrapper}>
    <ProfileNav />
    <ProfileForm />
  </div>
);
