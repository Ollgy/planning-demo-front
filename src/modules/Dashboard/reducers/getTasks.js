import { getTasksRequest, getTasksSuccess, getTasksFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const tasks = handleActions(
  {
    [getTasksRequest]: () => [],
    [getTasksSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getTasksRequest]: () => true,
    [getTasksSuccess]: () => false,
    [getTasksFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getTasksRequest]: () => null,
    [getTasksFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  tasks,
  isLoading,
  error
});
