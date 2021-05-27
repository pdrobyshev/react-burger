import React from 'react';

import styles from './logo-wrapper.module.scss';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const LogoWrapper = () => {
	return (
		<a className={`${styles.logo}  ml-4  mr-4`} href="#">
			<Logo />
		</a>
	);
};

export default LogoWrapper;
