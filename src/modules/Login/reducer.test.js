import reducer from './reducer';
import { loginRequest, loginSuccess, loginFailure } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Login', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and user', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'user'])
    );
  });

  it('action loginRequest set flag isLoading in true', () => {
    expect(reducer(state0, loginRequest()).isLoading).toBeTruthy();
  });

  it('action loginSuccess set flag isLoading in false', () => {
    expect(reducer(state0, loginSuccess('test_user')).isLoading).toBeFalsy();
  });

  it('action loginFailure set flag isLoading in false', () => {
    expect(reducer(state0, loginFailure('test_error')).isLoading).toBeFalsy();
  });

  it("action loginSuccess set it's payload at field user", () => {
    expect(reducer(state0, loginSuccess('test_user')).user).toBe('test_user');
  });
});
