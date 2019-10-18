import { setViewMode, setInitialState } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialMode = {
  name: 'userlist',
  mode: 'read'
};

const data = handleActions(
  {
    [setViewMode]: (_state, action) => action.payload,
    [setInitialState]: () => initialMode
  },
  initialMode
);

export default combineReducers({
  data
});
