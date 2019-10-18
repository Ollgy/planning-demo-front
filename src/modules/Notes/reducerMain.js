import { combineReducers } from 'redux';
import delNote from './reducers/delNote';
import newNote from './reducers/newNote';
import getNotes from './reducers/getNotes';
import datalist from './reducers/datalist';

export default combineReducers({
  datalist,
  newNote,
  delNote,
  getNotes
});
