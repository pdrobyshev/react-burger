import reducer, { initialState, registerRequest, loginRequest, logoutRequest } from './auth';

describe('burger reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle registerRequest pending', () => {
    const action = { type: registerRequest.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle registerRequest fulfilled', () => {
    const action = {
      type: registerRequest.fulfilled.type,
      payload: {
        accessToken: 'asd',
        refreshToken: 'zxc',
      },
    };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoggedIn: true, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle registerRequest rejected', () => {
    const action = { type: registerRequest.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle loginRequest pending', () => {
    const action = { type: loginRequest.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle loginRequest fulfilled', () => {
    const action = {
      type: registerRequest.fulfilled.type,
      payload: {
        accessToken: 'asd',
        refreshToken: 'zxc',
      },
    };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoggedIn: true, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle loginRequest rejected', () => {
    const action = { type: loginRequest.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle logoutRequest pending', () => {
    const action = { type: logoutRequest.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle logoutRequest fulfilled', () => {
    const action = {
      type: registerRequest.fulfilled.type,
      payload: {
        accessToken: 'asd',
        refreshToken: 'zxc',
      },
    };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoggedIn: true, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle logoutRequest rejected', () => {
    const action = { type: logoutRequest.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });
});
