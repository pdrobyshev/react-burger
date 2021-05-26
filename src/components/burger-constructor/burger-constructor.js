import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-constructor.module.scss';
import {
	CurrencyIcon,
	Button,
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const tempImg1 = 'https://code.s3.yandex.net/react/code/bun-02.png';
const tempImg2 = 'https://code.s3.yandex.net/react/code/sauce-03.png';
const tempImg3 = 'https://code.s3.yandex.net/react/code/meat-02.png';
const tempImg4 = 'https://code.s3.yandex.net/react/code/sp_1.png';
const tempImg5 = 'https://code.s3.yandex.net/react/code/mineral_rings.png';

const ConstructorElementWrapper = ({ type, isLocked, draggable, text, thumbnail, price }) => (
	<div className={`${styles.elementWrapper} ${draggable === true ? styles.draggable : styles.fixed}`}>
		{draggable && (
			<span className="mr-2">
				<DragIcon type="primary" />
			</span>
		)}
		<ConstructorElement type={type} isLocked={isLocked} text={text} thumbnail={thumbnail} price={price} />
	</div>
);

const IngredientsList = () => (
	<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
		<ConstructorElementWrapper
			type="top"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (верх)"
			thumbnail={tempImg1}
			price={20}
		/>

		<div className={`${styles.ingredientsWrapper}  ${styles.scroll}  pr-2`}>
			<ConstructorElementWrapper
				draggable={true}
				text="Соус традиционный галактический"
				thumbnail={tempImg2}
				price={30}
			/>
			<ConstructorElementWrapper
				draggable={true}
				text="Мясо бессмертных моллюсков Protostomia"
				thumbnail={tempImg3}
				price={300}
			/>
			<ConstructorElementWrapper
				draggable={true}
				text="Плоды Фалленианского дерева"
				thumbnail={tempImg4}
				price={80}
			/>
			<ConstructorElementWrapper
				draggable={true}
				text="Хрустящие минеральные кольца"
				thumbnail={tempImg5}
				price={80}
			/>
			<ConstructorElementWrapper
				draggable={true}
				text="Хрустящие минеральные кольца"
				thumbnail={tempImg5}
				price={80}
			/>
			<ConstructorElementWrapper
				draggable={true}
				text="Хрустящие минеральные кольца"
				thumbnail={tempImg5}
				price={80}
			/>
		</div>

		<ConstructorElementWrapper
			type="bottom"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (низ)"
			thumbnail={tempImg1}
			price={20}
		/>
	</section>
);

const Total = () => (
	<section className={`${styles.totalWrapper}  mr-4`}>
		<div className={`${styles.price}  mr-10`}>
			<span className="text  text_type_digits-medium  mr-2">610</span>
			<CurrencyIcon type="primary" />
		</div>
		<Button type="primary" size="large">
			Оформить заказ
		</Button>
	</section>
);

const BurgerConstructor = () => (
	<div className={`${styles.content}  pl-4  mt-25`}>
		<IngredientsList />
		<Total />
	</div>
);

ConstructorElementWrapper.propTypes = {
	type: PropTypes.string,
	isLocked: PropTypes.bool,
	draggable: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default BurgerConstructor;
