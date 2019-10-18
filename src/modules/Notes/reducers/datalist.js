import {
  inputForm,
  clearFields,
  clearAnim,
  saveNewNoteSuccess,
  getNotesSuccess,
  deleteNoteSuccess
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialFields = {
  text: ''
};

const fields = handleActions(
  {
    [inputForm]: (_state, action) => ({
      ..._state,
      [action.payload.input]: action.payload.value
    }),
    [clearFields]: () => initialFields
  },
  initialFields
);

const animAppear = handleActions(
  {
    [clearAnim]: () => false,
    [saveNewNoteSuccess]: () => true
  },
  false
);

const notelist = handleActions(
  {
    [getNotesSuccess]: (_state, action) => action.payload,
    [deleteNoteSuccess]: (_state, action) => action.payload,
    [saveNewNoteSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  fields,
  animAppear,
  notelist
});
