import { createAction } from 'redux-actions';
import api from '../../api';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
export const logout = createAction('LOGOUT');

export const login = userData => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(loginRequest());

      api
        .login(userData)
        .then(user => {
          dispatch(loginSuccess(user));
          resolve();
        })
        .catch(error => {
          dispatch(loginFailure(error));
          reject();
        });
    });
};
