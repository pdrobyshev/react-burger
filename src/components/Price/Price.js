import React from 'react';
import PropTypes from 'prop-types';

import styles from './Price.module.scss';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Price = ({ price, fontSize = 'default' }) => (
	<div className={styles.price}>
		<span className={`text  text_type_digits-${fontSize}  mr-2`}>{price}</span>
		<CurrencyIcon type="primary" />
	</div>
);

Price.propTypes = {
	price: PropTypes.number.isRequired,
};

export default Price;
