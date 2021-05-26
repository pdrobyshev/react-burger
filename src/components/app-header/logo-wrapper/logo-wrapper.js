import React from 'react';

import styles from './logo-wrapper.module.scss';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const LogoWrapper = () => {
	return (
		<div className={styles.logo}>
			<Logo />
		</div>
	);
};

export default LogoWrapper;
