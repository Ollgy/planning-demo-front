import {
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const users = handleActions(
  {
    [deleteUserRequest]: () => [],
    [deleteUserSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [deleteUserRequest]: () => true,
    [deleteUserSuccess]: () => false,
    [deleteUserFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [deleteUserRequest]: () => null,
    [deleteUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  users,
  isLoading,
  error
});
