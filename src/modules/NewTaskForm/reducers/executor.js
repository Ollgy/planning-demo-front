import { getUserRequest, getUserSuccess, getUserFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [getUserRequest]: () => null,
    [getUserSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [getUserRequest]: () => true,
    [getUserSuccess]: () => false,
    [getUserFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getUserRequest]: () => null,
    [getUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
