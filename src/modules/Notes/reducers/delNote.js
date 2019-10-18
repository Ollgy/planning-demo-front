import {
  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const notelist = handleActions(
  {
    [deleteNoteRequest]: () => [],
    [deleteNoteSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [deleteNoteRequest]: () => true,
    [deleteNoteSuccess]: () => false,
    [deleteNoteFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [deleteNoteRequest]: () => null,
    [deleteNoteFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  notelist,
  isLoading,
  error
});
