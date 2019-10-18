import { combineReducers } from 'redux';
import executor from './reducers/executor';
import newTask from './reducers/newTask';
import datalist from './reducers/datalist';

export default combineReducers({
  datalist,
  executor,
  newTask
});
