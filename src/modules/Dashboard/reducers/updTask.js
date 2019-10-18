import {
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const tasks = handleActions(
  {
    [updateTaskRequest]: () => [],
    [updateTaskSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [updateTaskRequest]: () => true,
    [updateTaskSuccess]: () => false,
    [updateTaskFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [updateTaskRequest]: () => null,
    [updateTaskFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  tasks,
  isLoading,
  error
});
