import reducer from '../reducers/passwordUpdate';
import {
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure
} from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer ChangePassword', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and user', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'user'])
    );
  });

  it('action updatePasswordRequest set flag isLoading in true', () => {
    expect(reducer(state0, updatePasswordRequest()).isLoading).toBeTruthy();
  });

  it('action updatePasswordSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, updatePasswordSuccess('test_user')).isLoading
    ).toBeFalsy();
  });

  it('action updatePasswordFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, updatePasswordFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action updatePasswordSuccess set it's payload at field user", () => {
    expect(reducer(state0, updatePasswordSuccess('test_user')).user).toBe(
      'test_user'
    );
  });
});
