/*
Из библиотеки UI-компонентов возьмите следующие:
	логотип,
		иконки,
		типографику,
		систему отступов.
	Остальную вёрстку выполните самостоятельно
	*/

import React from 'react';
import styles from './AppHeader.module.scss';
import Nav from '../Nav/Nav';
import { ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../LinkItem/LinkItem';

const AppHeader = () => {
	return (
		<header className={`p-4  ${styles.header}`}>
			<div className={styles.content}>
				<Nav />
				<Logo />
				<LinkItem Icon={ProfileIcon} iconType="secondary" text="Личный кабинет" />
			</div>
		</header>
	);
};

export default AppHeader;
