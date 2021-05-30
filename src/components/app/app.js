import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import PageContent from '../page-content/page-content';
import Error from '../error/error';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [data, setData] = useState([]);
	const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);
	const [isIngredientModalOpened, setIsIngredientModalOpened] = useState(false);
	const [currentIngredient, setCurrentIngredient] = useState({});

	const onOrderModalToggle = () => {
		setIsOrderModalOpened((prevState) => !prevState);
	};

	const onIngredientModalToggle = (ingredient) => {
		setCurrentIngredient(ingredient);
		setIsIngredientModalOpened((prevState) => !prevState);
	};

	useEffect(() => {
		console.log(currentIngredient);
	}, [currentIngredient]);

	useEffect(() => {
		setIsLoading(true);

		fetch(API_URL)
			.then((res) => {
				if (!res.ok) {
					setHasError(true);
					return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
				}

				return res.json();
			})
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	let content = (
		<PageContent
			ingredients={data}
			onOrderModalOpen={onOrderModalToggle}
			onIngredientModalOpen={onIngredientModalToggle}
		/>
	);
	if (hasError) {
		content = <Error />;
	} else if (isLoading) {
		content = <Loader />;
	}

	return (
		<>
			<AppHeader />
			{content}

			{isOrderModalOpened && (
				<Modal onModalClose={onOrderModalToggle}>
					<OrderDetails />
				</Modal>
			)}

			{isIngredientModalOpened && (
				<Modal title="Детали ингредиента" onModalClose={onIngredientModalToggle}>
					<IngredientDetails {...currentIngredient} />
				</Modal>
			)}
		</>
	);
};

export default App;
