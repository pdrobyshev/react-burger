import React, { useEffect } from 'react';

import styles from './tabs.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const Tabs = ({ inViewBuns, inViewSauces, inViewMains }) => {
	const [current, setCurrent] = React.useState('Булки');

	useEffect(() => {
		if (inViewBuns) {
			setCurrent('Булки');
		} else if (inViewSauces) {
			setCurrent('Соусы');
		} else if (inViewMains) {
			setCurrent('Начинки');
		}
	}, [inViewBuns, inViewMains, inViewSauces]);

	return (
		<div className={`${styles.tabs}  mb-10`}>
			<Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
				Булки
			</Tab>
			<Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
				Соусы
			</Tab>
			<Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
				Начинки
			</Tab>
		</div>
	);
};

export default Tabs;
