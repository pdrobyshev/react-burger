import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import { addConstructorBun, addConstructorIngredient } from '../../../services/burger/actions';
import { countTotalPrice } from '../../../services/total-price/actions';
import { setOrderElementsIds } from '../../../services/order/actions';

import styles from './ingredients-list.module.scss';
import BurgerElement from '../burger-element/burger-element';

const IngredientsList = () => {
	const dispatch = useDispatch();
	const { constructorIngredients, bun } = useSelector((store) => store.burger);

	useEffect(() => {
		if (bun || constructorIngredients.length) dispatch(countTotalPrice({ constructorIngredients, bun }));

		const order = constructorIngredients.map((ingredient) => ingredient._id);
		bun && order.push(bun._id);
		dispatch(setOrderElementsIds(order));
	}, [dispatch, constructorIngredients, bun]);

	const handleDrop = (item) => {
		if (item.type === 'bun') {
			dispatch(addConstructorBun(item));
		} else {
			dispatch(addConstructorIngredient(item));
		}
	};

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

	const burgerElementsList = constructorIngredients.map((ingredient, index) => {
		const { constructorIngredientId, name, image, price } = ingredient;
		return (
			<BurgerElement
				key={constructorIngredientId}
				draggable={true}
				text={name}
				thumbnail={image}
				price={price}
				id={constructorIngredientId}
				idx={index}
			/>
		);
	});

	const constructorContent =
		bun || constructorIngredients.length ? (
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
