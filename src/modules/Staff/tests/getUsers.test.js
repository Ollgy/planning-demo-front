import reducer from '../reducers/getUsers';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer getUsers', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and users', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'users'])
    );
  });

  it('action getUsersRequest set flag isLoading in true', () => {
    expect(reducer(state0, getUsersRequest()).isLoading).toBeTruthy();
  });

  it('action getUsersSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, getUsersSuccess('test_users')).isLoading
    ).toBeFalsy();
  });

  it('action getUsersFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, getUsersFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action getUsersSuccess set it's payload at field users", () => {
    expect(reducer(state0, getUsersSuccess('test_users')).users).toBe(
      'test_users'
    );
  });
});
