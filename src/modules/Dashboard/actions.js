import { createAction } from 'redux-actions';
import api from '../../api';

export const setCurItem = createAction('SET_CUR_TASK_ITEM');
export const setDialog = createAction('SET_DIALOG_TASK');

export const updateTaskRequest = createAction('UPDATE_TASK_REQUEST');
export const updateTaskSuccess = createAction('UPDATE_TASK_SUCCESS');
export const updateTaskFailure = createAction('UPDATE_TASK_FAILURE');

export const updateTask = (taskId, taskData) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(updateTaskRequest());

      api
        .updateTask(taskId, taskData)
        .then(tasks => {
          dispatch(updateTaskSuccess(tasks));
          resolve();
        })
        .catch(error => {
          dispatch(updateTaskFailure(error));
          reject();
        });
    });
};

export const deleteTaskRequest = createAction('DELETE_TASK_REQUEST');
export const deleteTaskSuccess = createAction('DELETE_TASK_SUCCESS');
export const deleteTaskFailure = createAction('DELETE_TASK_FAILURE');

export const deleteTask = taskId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(deleteTaskRequest());

      api
        .deleteTask(taskId)
        .then(tasks => {
          dispatch(deleteTaskSuccess(tasks));
          resolve();
        })
        .catch(error => {
          dispatch(deleteTaskFailure(error));
          reject();
        });
    });
};

export const getTasksRequest = createAction('GET_TASKS_REQUEST');
export const getTasksSuccess = createAction('GET_TASKS_SUCCESS');
export const getTasksFailure = createAction('GET_TASKS_FAILURE');

export const getTasks = userId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getTasksRequest());

      api
        .getTasks(userId)
        .then(tasks => {
          dispatch(getTasksSuccess(tasks));
          resolve();
        })
        .catch(error => {
          dispatch(getTasksFailure(error));
          reject();
        });
    });
};
