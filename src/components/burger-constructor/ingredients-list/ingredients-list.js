import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countTotalPrice } from '../../../services/total-price/actions';
import { setOrderElementsIds } from '../../../services/order/actions';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';

const IngredientsList = () => {
	const dispatch = useDispatch();
	const { ingredients } = useSelector((store) => store.burger);
	const [bun, setBun] = useState(null);
	const [filteredBurgerElements, setFilteredBurgerElements] = useState([]);

	useEffect(() => {
		const bun = ingredients.filter((ingredient) => ingredient.type === 'bun')[0];
		const filteredBurgerElements = ingredients.filter((ingredient) => ingredient.type !== 'bun');
		setBun(bun);
		setFilteredBurgerElements(filteredBurgerElements);
	}, [ingredients]);

	const order = filteredBurgerElements.map((el) => el._id);
	bun && order.push(bun._id);

	useEffect(() => {
		filteredBurgerElements && bun && dispatch(countTotalPrice({ filteredBurgerElements, bun }));
		dispatch(setOrderElementsIds(order));
	}, [dispatch, filteredBurgerElements, bun]);

	const burgerElementsList = filteredBurgerElements.map((ingredient) => {
		const { _id, name, image, price } = ingredient;
		return <BurgerElement key={_id} draggable={true} text={name} thumbnail={image} price={price} />;
	});

	return (
		<section className={`${styles.ingredientsWrapper}  mb-10  pr-4`}>
			{bun && (
				<BurgerElement
					type="top"
					isLocked={true}
					text={`${bun.name} (верх)`}
					thumbnail={bun.image}
					price={bun.price}
				/>
			)}

			<div className={`${styles.ingredientsWrapper}  ${styles.scrollHeight}  scroll  pr-2`}>
				{burgerElementsList}
			</div>

			{bun && (
				<BurgerElement
					type="bottom"
					isLocked={true}
					text={`${bun.name} (низ)`}
					thumbnail={bun.image}
					price={bun.price}
				/>
			)}
		</section>
	);
};

export default IngredientsList;
