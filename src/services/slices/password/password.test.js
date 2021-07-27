import reducer, { initialState, sendResetPasswordEmail, resetPassword } from './password';

describe('password reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle sendResetPasswordEmail pending', () => {
    const action = { type: sendResetPasswordEmail.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle sendResetPasswordEmail fulfilled', () => {
    const action = { type: sendResetPasswordEmail.fulfilled.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isResetEmailSent: true, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle sendResetPasswordEmail rejected', () => {
    const action = { type: resetPassword.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle resetPassword pending', () => {
    const action = { type: resetPassword.pending.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: true };
    expect(state).toEqual(result);
  });

  it('should handle resetPassword fulfilled', () => {
    const action = { type: resetPassword.fulfilled.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isPasswordReset: true, isLoading: false };
    expect(state).toEqual(result);
  });

  it('should handle resetPassword rejected', () => {
    const action = { type: resetPassword.rejected.type };
    const state = reducer(initialState, action);
    const result = { ...initialState, isLoading: false };
    expect(state).toEqual(result);
  });
});
