import reducer, {
  initialState,
  addConstructorBun,
  addConstructorIngredient,
  deleteConstructorIngredient,
  resetConstructorState,
  moveConstructorItem,
} from './burger';

describe('burger reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should add constructor bun', () => {
    const payload = {
      name: 'Булка',
      _id: '1',
    };
    const state = reducer(initialState, addConstructorBun(payload));
    const result = { ...initialState, bun: payload };
    expect(state).toEqual(result);
  });

  it('should add constructor ingredient', () => {
    const payload = {
      name: 'Ингредиент',
      constructorIngredientId: 4,
    };
    const state = reducer({ initialState }, addConstructorIngredient(payload));
    const result = { ...initialState, constructorIngredients: [...payload] };
    expect(state).toEqual(result);
  });

  // it('should reset order', () => {
  //   const state = reducer(initialState, resetOrder());
  //   const result = { ...initialState, order: null };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle modal close', () => {
  //   const state = reducer(initialState, closeOrderModal());
  //   const result = { ...initialState, isOrderModalOpened: false };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle createOrder pending', () => {
  //   const action = { type: createOrder.pending.type };
  //   const state = reducer(initialState, action);
  //   const result = { ...initialState, isLoading: true };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle createOrder fulfilled', () => {
  //   const action = {
  //     type: createOrder.fulfilled.type,
  //     payload: {
  //       order: {
  //         number: '1241',
  //       },
  //     },
  //   };
  //   const state = reducer(initialState, action);
  //   const result = {
  //     ...initialState,
  //     isLoading: false,
  //     orderId: action.payload.order.number,
  //     isOrderModalOpened: true,
  //   };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle createOrder rejected', () => {
  //   const action = { type: createOrder.rejected.type };
  //   const state = reducer(initialState, action);
  //   const result = { ...initialState, orderId: null, isLoading: false };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle getOrderInfo pending', () => {
  //   const action = { type: getOrderInfo.pending.type };
  //   const state = reducer(initialState, action);
  //   const result = { ...initialState, isLoading: true };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle getOrderInfo fulfilled', () => {
  //   const action = {
  //     type: getOrderInfo.fulfilled.type,
  //     payload: {
  //       orders: [{}],
  //     },
  //   };
  //   const state = reducer(initialState, action);
  //   const result = { ...initialState, isLoading: false, order: action.payload.orders[0] };
  //   expect(state).toEqual(result);
  // });
  //
  // it('should handle getOrderInfo rejected', () => {
  //   const action = { type: getOrderInfo.rejected.type };
  //   const state = reducer(initialState, action);
  //   const result = { ...initialState, order: null, isLoading: false };
  //   expect(state).toEqual(result);
  // });
});
