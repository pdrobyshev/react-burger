import React from 'react';

import styles from './nav.module.scss';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import LinkItem from '../link-item/link-item';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<LinkItem Icon={BurgerIcon} iconType="primary" text="Конструктор" />
				</li>
				<li className={styles.item}>
					<LinkItem Icon={ListIcon} iconType="secondary" text="Лента заказов" />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
