import reducer, {
  initialState,
  wsConnectionOpened,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage,
} from './feed';

describe('feed reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle opening websocket', () => {
    const state = reducer(initialState, wsConnectionOpened());
    const result = { ...initialState, wsConnected: true, error: false };
    expect(state).toEqual(result);
  });

  it('should handle closing websocket', () => {
    const state = reducer(initialState, wsConnectionClosed());
    const result = { ...initialState, wsConnected: false, error: false };
    expect(state).toEqual(result);
  });

  it('should handle websocket error', () => {
    const payload = 'error message';
    const state = reducer(initialState, wsConnectionError(payload));
    const result = { ...initialState, wsConnected: false, error: payload };
    expect(state).toEqual(result);
  });

  it('should handle websocket message', () => {
    const payload = {
      orders: [{}, {}],
      total: 1234,
      totalToday: 123,
    };
    const state = reducer(initialState, wsGetMessage(payload));
    const result = {
      ...initialState,
      orders: payload.orders,
      total: payload.total,
      totalToday: payload.totalToday,
    };
    expect(state).toEqual(result);
  });
});
