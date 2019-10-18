import reducer from '../reducers/getTasks';
import { getTasksRequest, getTasksSuccess, getTasksFailure } from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer getTasks', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and tasks', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'tasks'])
    );
  });

  it('action getTasksRequest set flag isLoading in true', () => {
    expect(reducer(state0, getTasksRequest()).isLoading).toBeTruthy();
  });

  it('action getTasksSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, getTasksSuccess('test_tasks')).isLoading
    ).toBeFalsy();
  });

  it('action getTasksFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, getTasksFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action getTasksSuccess set it's payload at field tasks", () => {
    expect(reducer(state0, getTasksSuccess('test_tasks')).tasks).toBe(
      'test_tasks'
    );
  });
});
