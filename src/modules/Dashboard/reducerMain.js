import { combineReducers } from 'redux';
import delTask from './reducers/delTask';
import updTask from './reducers/updTask';
import getTasks from './reducers/getTasks';
import datalist from './reducers/datalist';

export default combineReducers({
  datalist,
  getTasks,
  delTask,
  updTask
});
