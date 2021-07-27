import orderReducer, { initialState, setOrderElementsIds, resetOrder, closeOrderModal } from './order';

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
    const reducer = orderReducer({ ...initialState, order: {} }, resetOrder());
    const result = { ...initialState, order: null };

    expect(reducer).toEqual(result);
  });

  it('should handle modal close', () => {
    const reducer = orderReducer({ ...initialState, isOrderModalOpened: true }, closeOrderModal());
    const result = { ...initialState, isOrderModalOpened: false };

    expect(reducer).toEqual(result);
  });
});
