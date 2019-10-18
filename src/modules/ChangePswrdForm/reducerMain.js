import { combineReducers } from 'redux';
import passwordUpdate from './reducers/passwordUpdate';
import datalist from './reducers/datalist';

export default combineReducers({
  datalist,
  passwordUpdate
});
