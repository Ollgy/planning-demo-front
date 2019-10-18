import reducer from '../reducers/userNew';
import {
  saveNewUserRequest,
  saveNewUserSuccess,
  saveNewUserFailure
} from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer newUser', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and user', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'user'])
    );
  });

  it('action saveNewUserRequest set flag isLoading in true', () => {
    expect(reducer(state0, saveNewUserRequest()).isLoading).toBeTruthy();
  });

  it('action saveNewUserSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewUserSuccess('test_user')).isLoading
    ).toBeFalsy();
  });

  it('action saveNewUserFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewUserFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action saveNewUserSuccess set it's payload at field user", () => {
    expect(reducer(state0, saveNewUserSuccess('test_user')).user).toBe(
      'test_user'
    );
  });
});
