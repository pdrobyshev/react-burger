import React from 'react';
import styles from './AppHeader.module.scss';
import Nav from '../Nav/Nav';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Profile from '../Profile/Profile';

const AppHeader = () => {
	return (
		<header className={`p-4  ${styles.header}`}>
			<div className={styles.content}>
				<Nav />
				<Logo />
				<Profile />
			</div>
		</header>
	);
};

export default AppHeader;
