import {
  cleanBaseRequest,
  cleanBaseSuccess,
  cleanBaseFailure
} from './actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const msg = handleActions(
  {
    [cleanBaseRequest]: () => null,
    [cleanBaseSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [cleanBaseRequest]: () => true,
    [cleanBaseSuccess]: () => false,
    [cleanBaseFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [cleanBaseRequest]: () => null,
    [cleanBaseFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  msg,
  isLoading,
  error
});
