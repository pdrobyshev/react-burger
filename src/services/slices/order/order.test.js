import orderReducer, {
  initialState,
  setOrderElementsIds,
  resetOrder,
  closeOrderModal,
  createOrder,
  getOrderInfo,
} from './order';

describe('order reducer', () => {
  it('should return the initial state', () => {
    const reducer = orderReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should set order elements ids', () => {
    const payload = ['60d3b41abdacab0026a733c8', '60d3b41abdacab0026a733c7'];
    const reducer = orderReducer(initialState, setOrderElementsIds(payload));
    const result = { ...initialState, constructorElementsIds: payload };
    expect(reducer).toEqual(result);
  });

  it('should reset order', () => {
    const reducer = orderReducer(initialState, resetOrder());
    const result = { ...initialState, order: null };
    expect(reducer).toEqual(result);
  });

  it('should handle modal close', () => {
    const reducer = orderReducer(initialState, closeOrderModal());
    const result = { ...initialState, isOrderModalOpened: false };
    expect(reducer).toEqual(result);
  });

  it('should handle createOrder pending', () => {
    const action = { type: createOrder.pending.type };
    const reducer = orderReducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(reducer).toEqual(result);
  });

  it('should handle createOrder fulfilled', () => {
    const action = {
      type: createOrder.fulfilled.type,
      payload: {
        order: {
          number: '1241',
        },
      },
    };
    const reducer = orderReducer(initialState, action);
    const result = {
      ...initialState,
      isLoading: false,
      orderId: action.payload.order.number,
      isOrderModalOpened: true,
    };
    expect(reducer).toEqual(result);
  });

  it('should handle createOrder rejected', () => {
    const action = { type: createOrder.rejected.type };
    const reducer = orderReducer(initialState, action);
    const result = { ...initialState, orderId: null, isLoading: false };
    expect(reducer).toEqual(result);
  });

  it('should handle getOrderInfo pending', () => {
    const action = { type: getOrderInfo.pending.type };
    const reducer = orderReducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(reducer).toEqual(result);
  });

  it('should handle getOrderInfo fulfilled', () => {
    const action = {
      type: getOrderInfo.fulfilled.type,
      payload: {
        orders: [{}],
      },
    };
    const reducer = orderReducer(initialState, action);
    const result = { ...initialState, isLoading: false, order: action.payload.orders[0] };
    expect(reducer).toEqual(result);
  });

  it('should handle getOrderInfo rejected', () => {
    const action = { type: getOrderInfo.rejected.type };
    const reducer = orderReducer(initialState, action);
    const result = { ...initialState, order: null, isLoading: false };
    expect(reducer).toEqual(result);
  });
});
