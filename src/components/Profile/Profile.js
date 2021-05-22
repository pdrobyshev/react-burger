import React from 'react';

import styles from './Profile.module.scss';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../LinkItem/LinkItem';

const Profile = () => {
	return (
		<div className={styles.profile}>
			<LinkItem Icon={ProfileIcon} iconType="secondary" text="Личный кабинет" />
		</div>
	);
};

export default Profile;
