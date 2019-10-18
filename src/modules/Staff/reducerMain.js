import { combineReducers } from 'redux';
import delUser from './reducers/delUser';
import filterUsers from './reducers/filterUsers';
import getUsers from './reducers/getUsers';
import datalist from './reducers/datalist';
import dialog from './reducers/dialog';
import view from './reducers/view';

export default combineReducers({
  datalist,
  dialog,
  view,
  delUser,
  filterUsers,
  getUsers
});
