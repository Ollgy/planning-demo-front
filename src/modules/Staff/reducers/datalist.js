import {
  setInitialState,
  setCurItem,
  inputFilter,
  getUsersSuccess,
  getFilterUsersSuccess,
  deleteUserSuccess
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const curStaffItem = handleActions(
  {
    [setCurItem]: (_state, action) => action.payload,
    [setInitialState]: () => ({})
  },
  {}
);

const filterValue =
  ({
    [inputFilter]: (_state, action) => ({
      ..._state,
      [action.payload.input]: action.payload.value
    }),
    [setInitialState]: () => ''
  },
  '');

const staff = handleActions(
  {
    [getUsersSuccess]: (_state, action) => action.payload,
    [deleteUserSuccess]: (_state, action) => action.payload,
    [getFilterUsersSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  staff,
  curStaffItem,
  filterValue
});
