import { createAction } from 'redux-actions';
import api from '../../api';

export const validateForm = createAction('VALIDATE_FORM_PSWRD');
export const inputForm = createAction('INPUT_FORM_PSWRD');
export const clearError = createAction('CLEAR_ERROR_PSWRD');

export const updatePasswordRequest = createAction('UPDATE_PASSWORD_REQUEST');
export const updatePasswordSuccess = createAction('UPDATE_PASSWORD_SUCCESS');
export const updatePasswordFailure = createAction('UPDATE_PASSWORD_FAILURE');

export const updatePassword = (userId, userData) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(updatePasswordRequest());

      api
        .updateUser(userId, userData)
        .then(user => {
          dispatch(updatePasswordSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(updatePasswordFailure(error));
          reject();
        });
    });
};
