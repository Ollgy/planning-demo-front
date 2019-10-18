import {
  saveNewTaskRequest,
  saveNewTaskSuccess,
  saveNewTaskFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const task = handleActions(
  {
    [saveNewTaskRequest]: () => null,
    [saveNewTaskSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [saveNewTaskRequest]: () => true,
    [saveNewTaskSuccess]: () => false,
    [saveNewTaskFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [saveNewTaskRequest]: () => null,
    [saveNewTaskFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  task,
  isLoading,
  error
});
