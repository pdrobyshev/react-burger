import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIngredients } from '../../services/burger/actions';
import { closeIngredientModal, closeOrderModal } from '../../services/modals/actions';

import AppHeader from '../app-header/app-header';
import PageContent from '../page-content/page-content';
import Error from '../error/error';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

const App = () => {
	const dispatch = useDispatch();
	const { orderId } = useSelector((store) => store.order);
	const { hasError, isLoading } = useSelector((store) => store.burger);
	const { currentIngredient, isIngredientModalOpened, isOrderModalOpened } = useSelector(
		(store) => store.modals
	);

	const onIngredientModalClose = () => dispatch(closeIngredientModal());
	const onOrderModalClose = () => dispatch(closeOrderModal());

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

	const content = hasError ? <Error /> : <PageContent />;

	return (
		<>
			<AppHeader />
			{isLoading ? <Loader /> : content}

			{isOrderModalOpened && (
				<Modal onModalClose={onOrderModalClose}>
					<OrderDetails orderId={orderId} />
				</Modal>
			)}

			{isIngredientModalOpened && currentIngredient && (
				<Modal title="Детали ингредиента" onModalClose={onIngredientModalClose}>
					<IngredientDetails {...currentIngredient} />
				</Modal>
			)}
		</>
	);
};

export default App;
