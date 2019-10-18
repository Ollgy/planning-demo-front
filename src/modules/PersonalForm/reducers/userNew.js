import {
  saveNewUserRequest,
  saveNewUserSuccess,
  saveNewUserFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [saveNewUserRequest]: () => null,
    [saveNewUserSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [saveNewUserRequest]: () => true,
    [saveNewUserSuccess]: () => false,
    [saveNewUserFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [saveNewUserRequest]: () => null,
    [saveNewUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
