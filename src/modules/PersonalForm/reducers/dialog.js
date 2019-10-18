import { setDialog } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialData = {
  calendar: false
};
const data = handleActions(
  {
    [setDialog]: (_state, action) => ({
      ..._state,
      [action.payload.name]: action.payload.status
    })
  },
  initialData
);

export default combineReducers({
  data
});
