import reducer, { getUserInfoRequest, initialState, updateUserInfoRequest } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle getUserInfoRequest pending', () => {
    const action = { type: getUserInfoRequest.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle getUserInfoRequest fulfilled', () => {
    const action = {
      type: getUserInfoRequest.fulfilled.type,
      payload: {
        user: {
          email: 'email',
          name: 'name',
        },
      },
    };
    const state = reducer(initialState, action);
    const result = {
      user: action.payload.user,
      isLoggedIn: true,
      isLoading: false,
    };
    expect(state).toEqual(result);
  });

  it('should handle getUserInfoRequest rejected', () => {
    const action = { type: getUserInfoRequest.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle updateUserInfoRequest pending', () => {
    const action = { type: updateUserInfoRequest.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle updateUserInfoRequest fulfilled', () => {
    const action = {
      type: updateUserInfoRequest.fulfilled.type,
      payload: {
        user: {
          email: 'email',
          name: 'name',
        },
      },
    };
    const state = reducer(initialState, action);
    const result = {
      user: action.payload.user,
      isLoggedIn: true,
      isLoading: false,
    };
    expect(state).toEqual(result);
  });

  it('should handle updateUserInfoRequest rejected', () => {
    const action = { type: updateUserInfoRequest.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });
});
