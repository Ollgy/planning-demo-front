import {
  saveNewNoteRequest,
  saveNewNoteSuccess,
  saveNewNoteFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const notelist = handleActions(
  {
    [saveNewNoteRequest]: () => [],
    [saveNewNoteSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [saveNewNoteRequest]: () => true,
    [saveNewNoteSuccess]: () => false,
    [saveNewNoteFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [saveNewNoteRequest]: () => null,
    [saveNewNoteFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  notelist,
  isLoading,
  error
});
