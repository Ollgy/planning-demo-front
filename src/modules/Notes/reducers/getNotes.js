import { getNotesRequest, getNotesSuccess, getNotesFailure } from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const notelist = handleActions(
  {
    [getNotesRequest]: () => [],
    [getNotesSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [getNotesRequest]: () => true,
    [getNotesSuccess]: () => false,
    [getNotesFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getNotesRequest]: () => null,
    [getNotesFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  notelist,
  isLoading,
  error
});
