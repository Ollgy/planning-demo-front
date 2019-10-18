import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [updateUserRequest]: () => null,
    [updateUserSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [updateUserRequest]: () => true,
    [updateUserSuccess]: () => false,
    [updateUserFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [updateUserRequest]: () => null,
    [updateUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
