import { createAction } from 'redux-actions';
import api from '../../api';

export const cleanBaseRequest = createAction('CLEAN_BASE_REQUEST');
export const cleanBaseSuccess = createAction('CLEAN_BASE_SUCCESS');
export const cleanBaseFailure = createAction('CLEAN_BASE_FAILURE');

export const cleanBase = () => {
  return (dispatch, getState) => {
    dispatch(cleanBaseRequest());

    api
      .cleanBase()
      .then(msg => {
        dispatch(cleanBaseSuccess(msg));
      })
      .catch(error => {
        dispatch(cleanBaseFailure(error));
      });
  };
};
