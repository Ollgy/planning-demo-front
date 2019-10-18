import {
  getPositionsRequest,
  getPositionsSuccess,
  getPositionsFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const items = handleActions(
  {
    [getPositionsRequest]: () => null,
    [getPositionsSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getPositionsRequest]: () => true,
    [getPositionsSuccess]: () => false,
    [getPositionsFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getPositionsRequest]: () => null,
    [getPositionsFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  items,
  isLoading,
  error
});
