import reducer from './reducer';
import {
  cleanBaseRequest,
  cleanBaseSuccess,
  cleanBaseFailure
} from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer CleanBase', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and msg', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'msg'])
    );
  });

  it('action cleanBaseRequest set flag isLoading in true', () => {
    expect(reducer(state0, cleanBaseRequest()).isLoading).toBeTruthy();
  });

  it('action cleanBaseSuccess set flag isLoading in false', () => {
    expect(reducer(state0, cleanBaseSuccess('test_msg')).isLoading).toBeFalsy();
  });

  it('action cleanBaseFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, cleanBaseFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action cleanBaseSuccess set it's payload at field msg", () => {
    expect(reducer(state0, cleanBaseSuccess('test_msg')).msg).toBe('test_msg');
  });
});
