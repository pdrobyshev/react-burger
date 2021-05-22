import React from 'react';

import styles from './AppHeader.module.scss';
import Nav from '../Nav/Nav';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Profile from '../Profile/Profile';

const AppHeader = () => {
	return (
		<header className={`${styles.header}  p-4`}>
			<div className={styles.content}>
				<Nav />
				<Logo />
				<Profile />
			</div>
		</header>
	);
};

export default AppHeader;
