import React from 'react';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';

const tempImg1 = 'https://code.s3.yandex.net/react/code/bun-02.png';
const tempImg2 = 'https://code.s3.yandex.net/react/code/sauce-03.png';
const tempImg3 = 'https://code.s3.yandex.net/react/code/meat-02.png';
const tempImg4 = 'https://code.s3.yandex.net/react/code/sp_1.png';
const tempImg5 = 'https://code.s3.yandex.net/react/code/mineral_rings.png';

const IngredientsList = () => (
	<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
		<BurgerElement
			type="top"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (верх)"
			thumbnail={tempImg1}
			price={20}
		/>

		<div className={`${styles.ingredientsWrapper}  ${styles.scrollHeight}  scroll  pr-2`}>
			<BurgerElement
				draggable={true}
				text="Соус традиционный галактический"
				thumbnail={tempImg2}
				price={30}
			/>
			<BurgerElement
				draggable={true}
				text="Мясо бессмертных моллюсков Protostomia"
				thumbnail={tempImg3}
				price={300}
			/>
			<BurgerElement draggable={true} text="Плоды Фалленианского дерева" thumbnail={tempImg4} price={80} />
			<BurgerElement draggable={true} text="Хрустящие минеральные кольца" thumbnail={tempImg5} price={80} />
			<BurgerElement draggable={true} text="Хрустящие минеральные кольца" thumbnail={tempImg5} price={80} />
			<BurgerElement draggable={true} text="Хрустящие минеральные кольца" thumbnail={tempImg5} price={80} />
		</div>

		<BurgerElement
			type="bottom"
			isLocked={true}
			draggable={false}
			text="Краторная булка N-200i (низ)"
			thumbnail={tempImg1}
			price={20}
		/>
	</section>
);

export default IngredientsList;
