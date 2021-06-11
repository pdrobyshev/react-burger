import React, { useContext } from 'react';

import styles from './burger-ingredients.module.scss';
import Tabs from './tabs/tabs';
import IngredientsGroup from './ingredients-group/ingredients-group';
import { BurgerContext } from '../../context/burger';

const BurgerIngredients = () => {
	// в IngredientsGroup Вы через props передаете ingredients, а они есть в контексте (можно и нужно брать из него)

	/*
	Здесь в каждый IngredientsGroup нужно передать определённые отфильтрованные игредиенты
	и дальше прокинуть их до компонента, в котором мапом прохожу по ним и возвращаю отдельный ингредиент
	Кажется, тут по-другому не получится сделать. Или я не понимаю как
	Можно внутри IngredientsGroup в зависимости от title фильтровать ингредиенты,
	но так тоже придётся передавать ингредиенты в следующий компонент, где мапом прохожу по ним и выходит не особо лучше, кажется
	*/

	const { ingredients } = useContext(BurgerContext);
	const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
	const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
	const main = ingredients.filter((ingredient) => ingredient.type === 'main');

	return (
		<section className={`${styles.content}  mt-10`}>
			<h1 className="text  text_type_main-large  mb-5">Соберите бургер</h1>

			<Tabs />

			<section className={`${styles.ingredientsWrapper}  scroll`}>
				<IngredientsGroup title="Булки" ingredients={buns} />
				<IngredientsGroup title="Соусы" ingredients={sauces} />
				<IngredientsGroup title="Начинки" ingredients={main} />
			</section>
		</section>
	);
};

export default BurgerIngredients;
