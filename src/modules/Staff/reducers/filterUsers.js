import {
  getFilterUsersRequest,
  getFilterUsersSuccess,
  getFilterUsersFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const users = handleActions(
  {
    [getFilterUsersRequest]: () => [],
    [getFilterUsersSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getFilterUsersRequest]: () => true,
    [getFilterUsersSuccess]: () => false,
    [getFilterUsersFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getFilterUsersRequest]: () => null,
    [getFilterUsersFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  users,
  isLoading,
  error
});
