import React, { useEffect, useReducer, useState } from 'react';

import AppHeader from '../app-header/app-header';
import PageContent from '../page-content/page-content';
import Error from '../error/error';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { BurgerContext } from '../../context/burger';
import { reducer, totalPriceInitialState } from '../../reducers/totalPrice';
import { API_URL } from '../../constants/api';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [ingredients, setIngredients] = useState([]);
	const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);
	const [isIngredientModalOpened, setIsIngredientModalOpened] = useState(false);
	const [currentIngredient, setCurrentIngredient] = useState(null);
	const [orderElementsIds, setOrderElementsIds] = useState([]);
	const [orderId, setOrderId] = useState(0);
	const [totalPrice, totalPriceDispatcher] = useReducer(reducer, totalPriceInitialState, undefined);

	const onOrderModalToggle = () => {
		setCurrentIngredient(null);
		setIsOrderModalOpened((prevState) => !prevState);
	};

	const onIngredientModalToggle = (ingredient) => {
		setCurrentIngredient(ingredient);
		setIsIngredientModalOpened((prevState) => !prevState);
	};

	useEffect(() => {
		setIsLoading(true);

		fetch(`${API_URL}ingredients`)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
				}

				return res.json();
			})
			.then((res) => {
				setIngredients(res.data);
			})
			.catch((err) => {
				setHasError(true);
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const content = hasError ? (
		<Error />
	) : (
		<BurgerContext.Provider
			value={{
				ingredients,
				totalPrice,
				totalPriceDispatcher,
				orderElementsIds,
				setOrderElementsIds,
				setOrderId,
				onOrderModalToggle,
				onIngredientModalToggle,
			}}
		>
			<PageContent />
		</BurgerContext.Provider>
	);

	return (
		<>
			<AppHeader />
			{isLoading ? <Loader /> : content}

			{isOrderModalOpened && (
				<Modal onModalClose={onOrderModalToggle}>
					<OrderDetails orderId={orderId} />
				</Modal>
			)}

			{isIngredientModalOpened && currentIngredient && (
				<Modal title="Детали ингредиента" onModalClose={onIngredientModalToggle}>
					<IngredientDetails {...currentIngredient} />
				</Modal>
			)}
		</>
	);
};

export default App;
