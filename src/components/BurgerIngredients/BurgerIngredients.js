// 	У компонента свой кастомизированный скроллбар.
// 	Подумайте над реализацией и возможным ограничением высоты блока,
// 	в том числе и на разных разрешениях экранов.

import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredients.module.scss';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data';
import Price from '../Price/Price';

const buns = data.filter((ingredient) => ingredient.type === 'bun');
const sauces = data.filter((ingredient) => ingredient.type === 'sauce');
const main = data.filter((ingredient) => ingredient.type === 'main');

const IngredientsGroup = ({ title, ingredients }) => (
	<>
		<h2 className={`mb-6  text  text_type_main-medium`}>{title}</h2>
		<IngredientsList ingredients={ingredients} />
	</>
);

const IngredientsList = ({ ingredients }) => (
	<ul className={`${styles.list}  p-4  pt-6`}>
		{ingredients.map((ingredient) => (
			<Ingredient
				image={ingredient.image}
				price={ingredient.price}
				name={ingredient.name}
				key={ingredient._id}
			/>
		))}
	</ul>
);

const Ingredient = ({ image, price, name }) => (
	<li className={styles.item}>
		<div className={`pl-4  pr-4  mb-1`}>
			<img className={styles.image} src={image} alt={name} />
			<Price price={price} />
		</div>
		<span className={`${styles.name}  text  text_type_main-default`}>{name}</span>
	</li>
);

const Tabs = () => {
	const [current, setCurrent] = React.useState('Булки');
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

const BurgerIngredients = () => (
	<section className={`pt-10`}>
		<h1 className={`text  text_type_main-large  mb-5`}>Соберите бургер</h1>

		<Tabs />

		<div className={styles.ingredientsWrapper}>
			<IngredientsGroup title="Булки" ingredients={buns} />
			<IngredientsGroup title="Соусы" ingredients={sauces} />
			<IngredientsGroup title="Начинки" ingredients={main} />
		</div>
	</section>
);

const ingredientsPropTypes = PropTypes.shape({
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
});

IngredientsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default BurgerIngredients;
