import {
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const tasks = handleActions(
  {
    [deleteTaskRequest]: () => [],
    [deleteTaskSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [deleteTaskRequest]: () => true,
    [deleteTaskSuccess]: () => false,
    [deleteTaskFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [deleteTaskRequest]: () => null,
    [deleteTaskFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  tasks,
  isLoading,
  error
});
