import {
  setCurItem,
  setDialog,
  updateTaskSuccess,
  getTasksSuccess,
  deleteTaskSuccess
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const curTaskItem = handleActions(
  {
    [setCurItem]: (_state, action) => action.payload
  },
  {}
);

const dialog = handleActions(
  {
    [setDialog]: (_state, action) => ({
      ..._state,
      [action.payload.dialog]: action.payload.value
    })
  },
  false
);

const tasks = handleActions(
  {
    [getTasksSuccess]: (_state, action) => action.payload,
    [deleteTaskSuccess]: (_state, action) => action.payload,
    [updateTaskSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  tasks,
  dialog,
  curTaskItem
});
