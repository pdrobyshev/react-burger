import React from 'react';

import styles from './ingredient.module.scss';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = ({ image, price, name }) => (
	<li className={styles.item}>
		<Counter count={1} size="default" />

		<div className="pl-4  pr-4  mb-1">
			<img className={styles.image} src={image} alt={name} />
			<div className={styles.price}>
				<span className="text  text_type_digits-default  mr-2">{price}</span>
				<CurrencyIcon type="primary" />
			</div>
		</div>

		<span className={`${styles.name}  text  text_type_main-default`}>{name}</span>
	</li>
);

export default Ingredient;
