import {
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [updatePasswordRequest]: () => null,
    [updatePasswordSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [updatePasswordRequest]: () => true,
    [updatePasswordSuccess]: () => false,
    [updatePasswordFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [updatePasswordRequest]: () => null,
    [updatePasswordFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
