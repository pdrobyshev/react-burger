import React from 'react';

import styles from './app-header.module.scss';
import Nav from './nav/nav';
import LogoWrapper from './logo-wrapper/logo-wrapper';
import Profile from './profile-link/profile-link';

const AppHeader = () => {
	return (
		<header className={`${styles.header}  pt-4  pb-4`}>
			<div className={styles.content}>
				<Nav />
				<LogoWrapper />
				<Profile />
			</div>
		</header>
	);
};

export default AppHeader;
