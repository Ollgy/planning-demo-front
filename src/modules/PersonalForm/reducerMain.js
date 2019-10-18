import { combineReducers } from 'redux';
import positions from './reducers/positions';
import userNew from './reducers/userNew';
import userUpdate from './reducers/userUpdate';
import userImage from './reducers/userImage';
import datalist from './reducers/datalist';
import view from './reducers/view';
import dialog from './reducers/dialog';

export default combineReducers({
  positions,
  datalist,
  view,
  dialog,
  userUpdate,
  userNew,
  userImage
});
