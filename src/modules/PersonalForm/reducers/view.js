import { setViewMode } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const mode = handleActions(
  {
    [setViewMode]: (_state, action) => action.payload
  },
  'read'
);

export default combineReducers({
  mode
});
