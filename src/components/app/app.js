import React, { useEffect, useReducer, useState } from 'react';

import { BurgerContext } from '../../context/burger';
import { reducer, initialState } from '../../services/reducers/totalPrice';
import { API_URL } from '../../constants/api';

import AppHeader from '../app-header/app-header';
import PageContent from '../page-content/page-content';
import Error from '../error/error';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_INGREDIENT_MODAL } from '../../constants/actionTypes';
import { closeIngredientModal } from '../../services/actions/modals';
import { getIngredients } from '../../services/actions/burger';

const App = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const [hasError, setHasError] = useState(false);
	// const [ingredients, setIngredients] = useState([]);
	const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);
	// const [isIngredientModalOpened, setIsIngredientModalOpened] = useState(false);
	// const [currentIngredient, setCurrentIngredient] = useState(null);
	const [orderElementsIds, setOrderElementsIds] = useState([]);
	const [orderId, setOrderId] = useState(0);
	const [totalPrice, totalPriceDispatcher] = useReducer(reducer, initialState, undefined);

	const dispatch = useDispatch();

	const { hasError, isLoading, ingredients } = useSelector((store) => store.burger);
	const { currentIngredient, isIngredientModalOpened } = useSelector((store) => store.modals);

	// const onOrderModalToggle = () => {
	// 	setCurrentIngredient(null);
	// 	setIsOrderModalOpened((prevState) => !prevState);
	// };

	// const onIngredientModalToggle = (ingredient) => {
	// 	setCurrentIngredient(ingredient);
	// 	setIsIngredientModalOpened((prevState) => !prevState);
	// };

	const onIngredientModalClose = () => dispatch(closeIngredientModal());

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

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
				// onOrderModalToggle,
				// onIngredientModalToggle,
			}}
		>
			<PageContent />
		</BurgerContext.Provider>
	);

	return (
		<>
			<AppHeader />
			{isLoading ? <Loader /> : content}

			{/*{isOrderModalOpened && (*/}
			{/*	<Modal onModalClose={onOrderModalToggle}>*/}
			{/*		<OrderDetails orderId={orderId} />*/}
			{/*	</Modal>*/}
			{/*)}*/}

			{isIngredientModalOpened && currentIngredient && (
				<Modal title="Детали ингредиента" onModalClose={onIngredientModalClose}>
					<IngredientDetails {...currentIngredient} />
				</Modal>
			)}
		</>
	);
};

export default App;
