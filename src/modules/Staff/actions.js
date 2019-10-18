import { createAction } from 'redux-actions';
import api from '../../api';

export const setCurItem = createAction('SET_CUR_ITEM_STAFF');
export const setDialog = createAction('SET_DIALOG_STAFF');
export const setViewMode = createAction('SET_VIEW_MODE_STAFF');
export const setInitialState = createAction('SET_INITIAL_STATE_STAFF');
export const inputFilter = createAction('INPUT_FORM_FILTER_STAFF');

export const getFilterUsersRequest = createAction('GET_FILTER_USERS_REQUEST');
export const getFilterUsersSuccess = createAction('GET_FILTER_USERS_SUCCESS');
export const getFilterUsersFailure = createAction('GET_FILTER_USERS_FAILURE');

export const getFilterUsers = str => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getFilterUsersRequest());

      api
        .getFilterUsers(str)
        .then(users => {
          dispatch(getFilterUsersSuccess(users));
          resolve();
        })
        .catch(error => {
          dispatch(getFilterUsersFailure(error));
          reject();
        });
    });
};

export const deleteUserRequest = createAction('DELETE_USER_REQUEST');
export const deleteUserSuccess = createAction('DELETE_USER_SUCCESS');
export const deleteUserFailure = createAction('DELETE_USER_FAILURE');

export const deleteUser = userId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(deleteUserRequest());

      api
        .deleteUser(userId)
        .then(users => {
          dispatch(deleteUserSuccess(users));
          resolve();
        })
        .catch(error => {
          dispatch(deleteUserFailure(error));
          reject();
        });
    });
};

export const getUsersRequest = createAction('GET_USERS_REQUEST');
export const getUsersSuccess = createAction('GET_USERS_SUCCESS');
export const getUsersFailure = createAction('GET_USERS_FAILURE');

export const getUsers = () => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getUsersRequest());

      api
        .getUsers()
        .then(users => {
          dispatch(getUsersSuccess(users));
          resolve();
        })
        .catch(error => {
          dispatch(getUsersFailure(error));
          reject();
        });
    });
};
