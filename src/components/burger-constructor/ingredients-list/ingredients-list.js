import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import { addConstructorIngredient } from '../../../services/burger/actions';
import { countTotalPrice } from '../../../services/total-price/actions';
import { setOrderElementsIds } from '../../../services/order/actions';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';

const IngredientsList = () => {
	const dispatch = useDispatch();
	const { constructorIngredients } = useSelector((store) => store.burger);
	const [bun, setBun] = useState(null);
	const [saucesAndMain, setSaucesAndMain] = useState([]);

	const handleDrop = ({ _id, type }) => dispatch(addConstructorIngredient(_id, type));

	const [{ isHover }, dropTarget] = useDrop({
		accept: 'ingredient',
		collect: (monitor) => ({
			isHover: monitor.isOver(),
		}),
		drop(item) {
			handleDrop(item);
		},
	});

	const backgroundColor = isHover && 'rgba(133, 133, 173, 0.5)';

	useEffect(() => {
		console.dir(constructorIngredients);

		const bun = constructorIngredients.filter((ingredient) => ingredient.type === 'bun')[0];
		const saucesAndMain = constructorIngredients.filter((ingredient) => ingredient.type !== 'bun');
		setBun(bun);
		setSaucesAndMain(saucesAndMain);
	}, [constructorIngredients]);

	const burgerElementsList = saucesAndMain.map((ingredient, index) => {
		const { constructorIngredientId, name, image, price } = ingredient;
		return (
			<BurgerElement
				key={index}
				draggable={true}
				text={name}
				thumbnail={image}
				price={price}
				id={constructorIngredientId}
			/>
		);
	});

	// const constructorIngredientsIds = saucesAndMain.map((ingredient) => ingredient._id);
	// bun && constructorIngredientsIds.push(bun._id);

	// useEffect(() => {
	// 	saucesAndMain && bun && dispatch(countTotalPrice({ saucesAndMain, bun }));
	// 	dispatch(setOrderElementsIds(constructorIngredientsIds));
	// }, [dispatch, saucesAndMain, bun]);

	const constructorContent = constructorIngredients.length ? (
		<>
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
		</>
	) : (
		<h2 className={styles.title}>Перетащите ингредиенты в эту область</h2>
	);

	return (
		<section
			className={`${styles.ingredientsWrapper}  ${styles.fixedHeight}  mb-10`}
			style={{ backgroundColor }}
			ref={dropTarget}
		>
			{constructorContent}
		</section>
	);
};

export default IngredientsList;
