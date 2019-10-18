import reducer from '../reducers/newNote';
import {
  saveNewNoteRequest,
  saveNewNoteSuccess,
  saveNewNoteFailure
} from '../actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer newNote', () => {
  const state0 = reducer(undefined, randomAction);

  it('contains fields isLoading and Note', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'notelist'])
    );
  });

  it('action saveNewNoteRequest set flag isLoading in true', () => {
    expect(reducer(state0, saveNewNoteRequest()).isLoading).toBeTruthy();
  });

  it('action saveNewNoteSuccess set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewNoteSuccess('test_notes')).isLoading
    ).toBeFalsy();
  });

  it('action saveNewNoteFailure set flag isLoading in false', () => {
    expect(
      reducer(state0, saveNewNoteFailure('test_error')).isLoading
    ).toBeFalsy();
  });

  it("action saveNewNoteSuccess set it's payload at field notelist", () => {
    expect(reducer(state0, saveNewNoteSuccess('test_notelist')).notelist).toBe(
      'test_notelist'
    );
  });
});
