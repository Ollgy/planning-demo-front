import { createAction } from 'redux-actions';
import api from '../../api';

export const inputForm = createAction('INPUT_FORM_NOTE');
export const clearAnim = createAction('CLEAR_ANIM_NOTE');
export const clearFields = createAction('CLEAR_FIELDS_NOTE');

export const saveNewNoteRequest = createAction('SAVE_NEW_NOTE_REQUEST');
export const saveNewNoteSuccess = createAction('SAVE_NEW_NOTE_SUCCESS');
export const saveNewNoteFailure = createAction('SAVE_NEW_NOTE_FAILURE');

export const saveNewNote = noteData => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(saveNewNoteRequest());

      api
        .saveNewNote(noteData)
        .then(notes => {
          dispatch(saveNewNoteSuccess(notes));
          resolve();
        })
        .catch(error => {
          dispatch(saveNewNoteFailure(error));
          reject();
        });
    });
};

export const deleteNoteRequest = createAction('DELETE_NOTE_REQUEST');
export const deleteNoteSuccess = createAction('DELETE_NOTE_SUCCESS');
export const deleteNoteFailure = createAction('DELETE_NOTE_FAILURE');

export const deleteNote = noteId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(deleteNoteRequest());

      api
        .deleteNote(noteId)
        .then(notes => {
          dispatch(deleteNoteSuccess(notes));
          resolve();
        })
        .catch(error => {
          dispatch(deleteNoteFailure(error));
          reject();
        });
    });
};

export const getNotesRequest = createAction('GET_NOTES_REQUEST');
export const getNotesSuccess = createAction('GET_NOTES_SUCCESS');
export const getNotesFailure = createAction('GET_NOTES_FAILURE');

export const getNotes = userId => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(getNotesRequest());

      api
        .getNotes(userId)
        .then(notes => {
          dispatch(getNotesSuccess(notes));
          resolve();
        })
        .catch(error => {
          dispatch(getNotesFailure(error));
          reject();
        });
    });
};
