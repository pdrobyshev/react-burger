/*
Из библиотеки UI-компонентов возьмите следующие:
	элементы списка,
	иконки,
	Отображение списка организуйте самостоятельно. Подумайте над реализацией и возможным ограничением высоты блока, в том числе и на разных разрешениях экранов. Скроллбар не распространяется на заблокированные позиции конструктора.
	*/

import React from 'react';

import styles from './BurgerConstructor.module.scss';
import Price from '../Price/Price';
import { Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ElementWrapper = ({ draggable, type, isLocked, text, thumbnail, price }) => (
	<div className={`${styles.elementWrapper} ${draggable === true ? styles.draggable : ''}`}>
		{draggable && <DragIcon type="primary" />}
		<ConstructorElement type={type} isLocked={isLocked} text={text} thumbnail={thumbnail} price={price} />
	</div>
);

const BurgerConstructor = () => (
	<div className={`pl-4  pr-4  mt-25`}>
		<section className={`${styles.ingredientsWrapper}  mb-10`}>
			<ElementWrapper type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={20} />
			<div className={`${styles.ingredientsWrapper}  ${styles.scrollWrapper}`}>
				<ElementWrapper draggable={true} text="Соус традиционный галактический" price={30} />
				<ElementWrapper draggable={true} text="Мясо бессмертных моллюсков Protostomia" price={300} />
				<ElementWrapper draggable={true} text="Плоды Фалленианского дерева" price={80} />
				<ElementWrapper draggable={true} text="Хрустящие минеральные кольца" price={80} />
				<ElementWrapper draggable={true} text="Хрустящие минеральные кольца" price={80} />
			</div>
			<ElementWrapper type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={20} />
		</section>

		<section className={styles.flexWrapper}>
			<Price price={610} fontSize={'medium'} />
			<Button type="primary" size="large">
				Оформить заказ
			</Button>
		</section>
	</div>
);

export default BurgerConstructor;
