import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger-ingredients.module.scss';
import { data } from '../../utils/data';
import { CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const buns = data.filter((ingredient) => ingredient.type === 'bun');
const sauces = data.filter((ingredient) => ingredient.type === 'sauce');
const main = data.filter((ingredient) => ingredient.type === 'main');

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

const IngredientsGroup = ({ title, ingredients }) => (
	<>
		<h2 className="mb-6  text  text_type_main-medium">{title}</h2>
		<IngredientsList ingredients={ingredients} />
	</>
);

const IngredientsList = ({ ingredients }) => (
	<ul className={`${styles.list}  pt-6  pl-4  pr-2`}>
		{ingredients.map((ingredient) => (
			<Ingredient
				key={ingredient._id}
				image={ingredient.image}
				price={ingredient.price}
				name={ingredient.name}
			/>
		))}
	</ul>
);

const Ingredient = ({ image, price, name }) => (
	<li className={styles.item}>
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

const BurgerIngredients = () => (
	<section className={`${styles.content}  mt-10`}>
		<h1 className="text  text_type_main-large  mb-5">Соберите бургер</h1>

		<Tabs />

		<section className={styles.ingredientsWrapper}>
			<IngredientsGroup title="Булки" ingredients={buns} />
			<IngredientsGroup title="Соусы" ingredients={sauces} />
			<IngredientsGroup title="Начинки" ingredients={main} />
		</section>
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
