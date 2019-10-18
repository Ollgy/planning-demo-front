import reducer from './reducer';
import {
  authFromTokenRequest,
  authFromTokenSuccess,
  authFromTokenFailure
} from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Auth', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and user', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'user'])
    );
  });

  it('action authFromTokenRequest set flag isLoading in true', () => {
    expect(reducer(state0, authFromTokenRequest()).isLoading).toBeTruthy();
  });

  it('action authFromTokenSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, authFromTokenSuccess('test_user')).isLoading
    ).toBeFalsy();
  });

  it('action authFromTokenFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, authFromTokenFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action authFromTokenSuccess set it's payload at field user", () => {
    expect(reducer(state0, authFromTokenSuccess('test_user')).user).toBe(
      'test_user'
    );
  });
});
