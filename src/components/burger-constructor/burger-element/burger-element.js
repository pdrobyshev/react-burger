import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-element.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerElement = ({ type, isLocked, draggable, text, thumbnail, price }) => (
	<div className={`${styles.element} ${draggable === true ? styles.draggable : styles.fixed}`}>
		{draggable && (
			<span className="mr-2">
				<DragIcon type="primary" />
			</span>
		)}

		<ConstructorElement type={type} isLocked={isLocked} text={text} thumbnail={thumbnail} price={price} />
	</div>
);

BurgerElement.propTypes = {
	type: PropTypes.string,
	isLocked: PropTypes.bool,
	draggable: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default BurgerElement;
