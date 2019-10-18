import { setDialog, setInitialState } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialData = {
  newTaskWindow: {
    status: false
  },
  popup: {
    status: false,
    msg: '',
    userAnswer: false
  }
};

const data = handleActions(
  {
    [setDialog]: (_state, action) => ({
      ..._state,
      [action.payload.name]: action.payload.value
    }),
    [setInitialState]: () => initialData
  },
  initialData
);

export default combineReducers({
  data
});
