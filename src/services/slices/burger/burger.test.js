import { v4 as uuidv4 } from 'uuid';
import reducer, {
  initialState,
  addConstructorBun,
  addConstructorIngredient,
  deleteConstructorIngredient,
  moveConstructorItem,
  getIngredients,
} from './burger';
import { createOrder } from '../order/order';

jest.mock('uuid');

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
      constructorIngredientId: uuidv4.mockImplementation(() => '123'),
    };
    const state = reducer(initialState, addConstructorIngredient(payload));
    const result = {
      ...initialState,
      constructorIngredients: [{ name: 'Ингредиент', constructorIngredientId: '123' }],
    };
    expect(state).toEqual(result);
  });

  it('should delete constructor ingredient', () => {
    const payload = '1';
    const state = reducer(
      {
        ...initialState,
        constructorIngredients: [{ name: 'Булка', constructorIngredientId: '1' }],
      },
      deleteConstructorIngredient(payload)
    );
    const result = { ...initialState, constructorIngredients: [] };
    expect(state).toEqual(result);
  });

  it('should move constructor item', () => {
    const payload = { dragIndex: 1, hoverIndex: 0 };
    const state = reducer(
      {
        ...initialState,
        constructorIngredients: [{ name: 'asd' }, { name: 'zxc' }],
      },
      moveConstructorItem(payload)
    );
    const result = { ...initialState, constructorIngredients: [{ name: 'zxc' }, { name: 'asd' }] };
    expect(state).toEqual(result);
  });

  it('should handle getIngredients pending', () => {
    const action = { type: getIngredients.pending.type };
    const state = reducer(initialState, action);
    const result = {
      ...initialState,
      isLoading: true,
      hasError: false,
    };
    expect(state).toEqual(result);
  });

  it('should handle getIngredients fulfilled', () => {
    const action = {
      type: getIngredients.fulfilled.type,
      payload: {
        data: [{ name: 'ing1' }, { name: 'ing2' }],
      },
    };
    const state = reducer(initialState, action);
    const result = {
      ...initialState,
      isLoading: false,
      hasError: false,
      ingredients: action.payload.data,
    };
    expect(state).toEqual(result);
  });

  it('should handle getIngredients rejected', () => {
    const action = { type: getIngredients.rejected.type };
    const state = reducer(initialState, action);
    const result = {
      ...initialState,
      isLoading: false,
      hasError: true,
      ingredients: [],
    };
    expect(state).toEqual(result);
  });

  it('should handle createOrder fulfilled', () => {
    const action = { type: createOrder.fulfilled.type };
    const state = reducer(initialState, action);
    const result = {
      ...initialState,
      bun: null,
      constructorIngredients: [],
    };
    expect(state).toEqual(result);
  });
});
