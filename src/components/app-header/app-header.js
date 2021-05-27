import React from 'react';

import styles from './app-header.module.scss';
import Nav from './nav/nav';

const AppHeader = () => {
	return (
		<header className={`${styles.header}  pt-4  pb-4`}>
			<Nav />
		</header>
	);
};

export default AppHeader;
