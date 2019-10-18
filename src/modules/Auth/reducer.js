import {
  authFromTokenRequest,
  authFromTokenSuccess,
  authFromTokenFailure
} from './actions';
import { logout } from '../Login/actions';
import {
  updateUserSuccess,
  saveUserImageSuccess
} from '../PersonalForm/actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [authFromTokenRequest]: () => null,
    [authFromTokenSuccess]: (_state, action) => action.payload,
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
    [authFromTokenRequest]: () => true,
    [authFromTokenSuccess]: () => false,
    [authFromTokenFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [authFromTokenRequest]: () => null,
    [authFromTokenFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
