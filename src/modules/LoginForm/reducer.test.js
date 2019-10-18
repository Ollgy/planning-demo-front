import reducer from './reducer';
import { initialFields } from './reducer';
import { resetForm } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer LoginForm', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains blocks validation and fields', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['validation', 'fields'])
    );
  });

  it('action resetForm set form in initial state', () => {
    expect(reducer(state0, resetForm()).fields).toBe(initialFields);
  });
});
