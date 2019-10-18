import { createAction } from 'redux-actions';
import api from '../../api';

export const validateForm = createAction('VALIDATE_FORM_TASK');
export const inputForm = createAction('INPUT_FORM_TASK');
export const clearError = createAction('CLEAR_ERROR_TASK');
export const setFields = createAction('SET_FIELDS_TASK');
export const setMsgForm = createAction('SET_MSG_FORM_TASK');
export const setInitialState = createAction('SET_INITIAL_STATE_TASK');

export const saveNewTaskRequest = createAction('SAVE_NEW_TASK_FORM_REQUEST');
export const saveNewTaskSuccess = createAction('SAVE_NEW_TASK_FORM_SUCCESS');
export const saveNewTaskFailure = createAction('SAVE_NEW_TASK_FORM_FAILURE');

export const saveNewTask = (userId, taskData) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(saveNewTaskRequest());

      api
        .saveNewTask(userId, taskData)
        .then(task => {
          dispatch(saveNewTaskSuccess(task));
          resolve();
        })
        .catch(error => {
          dispatch(saveNewTaskFailure(error));
          reject();
        });
    });
};

export const getUserRequest = createAction('GET_USER_REQUEST');
export const getUserSuccess = createAction('GET_USER_SUCCESS');
export const getUserFailure = createAction('GET_USER_FAILURE');

export const getUser = userId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getUserRequest());

      api
        .getUser(userId)
        .then(user => {
          dispatch(getUserSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(getUserFailure(error));
          reject();
        });
    });
};
