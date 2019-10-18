import { getUsersRequest, getUsersSuccess, getUsersFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const users = handleActions(
  {
    [getUsersRequest]: () => [],
    [getUsersSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getUsersRequest]: () => true,
    [getUsersSuccess]: () => false,
    [getUsersFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getUsersRequest]: () => null,
    [getUsersFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  users,
  isLoading,
  error
});
