import { loginRequest, loginSuccess, loginFailure, logout } from './actions';
import {
  updateUserSuccess,
  saveUserImageSuccess
} from '../PersonalForm/actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [loginRequest]: () => null,
    [loginSuccess]: (_state, action) => action.payload,
    [logout]: () => null,
    [updateUserSuccess]: (_state, action) =>
      _state && _state.id === action.payload.id ? action.payload : _state,
    [saveUserImageSuccess]: (_state, action) =>
      _state && _state.id === action.payload.id ? action.payload : _state
  },
  null
);

const isLoading = handleActions(
  {
    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [loginRequest]: () => null,
    [loginFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
