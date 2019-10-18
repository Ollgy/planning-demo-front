import reducer from '../reducers/newTask';
import {
  saveNewTaskRequest,
  saveNewTaskSuccess,
  saveNewTaskFailure
} from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer newTask', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and task', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'task'])
    );
  });

  it('action saveNewTaskRequest set flag isLoading in true', () => {
    expect(reducer(state0, saveNewTaskRequest()).isLoading).toBeTruthy();
  });

  it('action saveNewTaskSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewTaskSuccess('test_tasks')).isLoading
    ).toBeFalsy();
  });

  it('action saveNewTaskFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewTaskFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action saveNewTaskSuccess set it's payload at field task", () => {
    expect(reducer(state0, saveNewTaskSuccess('test_task')).task).toBe(
      'test_task'
    );
  });
});
