const bunsAmount = 2;

export const totalPriceInitialState = { totalPrice: 0 };

export const reducer = (state, action) => {
	switch (action.type) {
		case 'INGREDIENTS':
			const totalPrice = action.payload.filteredBurgerElements.reduce((acc, el) => acc + el.price, 0);
			const bunPrice = action.payload.bun.price * bunsAmount;
			return { totalPrice: totalPrice + bunPrice };
		default:
			throw new Error(`Wrong type of action: ${action.type}`);
	}
};
