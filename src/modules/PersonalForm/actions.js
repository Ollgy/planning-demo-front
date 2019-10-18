import { createAction } from 'redux-actions';
import api from '../../api';

export const setFields = createAction('SET_FIELDS_PERSONAL');
export const setViewMode = createAction('SET_VIEW_MODE_PERSONAL');
export const setDialog = createAction('SET_DIALOG_PERSONAL');
export const validateForm = createAction('VALIDATE_FORM_PERSONAL');
export const inputForm = createAction('INPUT_FORM_PERSONAL');
export const clearError = createAction('CLEAR_ERROR_PERSONAL');

export const getPositionsRequest = createAction('GET_POSITIONS_REQUEST');
export const getPositionsSuccess = createAction('GET_POSITIONS_SUCCESS');
export const getPositionsFailure = createAction('GET_POSITIONS_FAILURE');

export const getPositions = () => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getPositionsRequest());

      api
        .getPositions()
        .then(positions => {
          dispatch(getPositionsSuccess(positions));
          resolve();
        })
        .catch(error => {
          dispatch(getPositionsFailure(error));
          reject();
        });
    });
};

export const saveNewUserRequest = createAction('SAVE_NEW_USER_REQUEST');
export const saveNewUserSuccess = createAction('SAVE_NEW_USER_SUCCESS');
export const saveNewUserFailure = createAction('SAVE_NEW_USER_FAILURE');

export const saveNewUser = userData => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(saveNewUserRequest());

      api
        .saveNewUser(userData)
        .then(user => {
          dispatch(saveNewUserSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(saveNewUserFailure(error));
          reject();
        });
    });
};

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');

export const updateUser = (userId, userData) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(updateUserRequest());

      api
        .updateUser(userId, userData)
        .then(user => {
          dispatch(updateUserSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(updateUserFailure(error));
          reject();
        });
    });
};

export const saveUserImageRequest = createAction('UPDATE_USER_REQUEST');
export const saveUserImageSuccess = createAction('UPDATE_USER_SUCCESS');
export const saveUserImageFailure = createAction('UPDATE_USER_FAILURE');

export const saveUserImage = (userId, imgData) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(saveUserImageRequest());

      api
        .saveUserImage(userId, imgData)
        .then(user => {
          dispatch(saveUserImageSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(saveUserImageFailure(error));
          reject();
        });
    });
};
