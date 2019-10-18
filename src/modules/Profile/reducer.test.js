import reducer from './reducer';
import { showPswrdBlock, hidePswrdBlock } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Profile', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains blocks validation and fields', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['pswrdBlockOpen'])
    );
  });

  it('action showPswrdBlock set block in open state', () => {
    expect(reducer(state0, showPswrdBlock()).pswrdBlockOpen).toEqual(true);
  });

  it('action hidePswrdBlock set block in closed state', () => {
    expect(reducer(state0, hidePswrdBlock()).pswrdBlockOpen).toEqual(false);
  });
});
