import { createAction } from 'redux-actions';
import api from '../../api';

export const authFromTokenRequest = createAction('AUTH_FROM_TOKEN_REQUEST');
export const authFromTokenSuccess = createAction('AUTH_FROM_TOKEN_SUCCESS');
export const authFromTokenFailure = createAction('AUTH_FROM_TOKEN_FAILURE');

export const authFromToken = () => {
  return (dispatch, getState) => {
    dispatch(authFromTokenRequest());

    api
      .authFromToken()
      .then(user => {
        dispatch(authFromTokenSuccess(user));
      })
      .catch(error => {
        dispatch(authFromTokenFailure(error));
      });
  };
};
