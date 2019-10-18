import {
  saveUserImageRequest,
  saveUserImageSuccess,
  saveUserImageFailure
} from '../actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const user = handleActions(
  {
    [saveUserImageRequest]: () => null,
    [saveUserImageSuccess]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [saveUserImageRequest]: () => true,
    [saveUserImageSuccess]: () => false,
    [saveUserImageFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [saveUserImageRequest]: () => null,
    [saveUserImageFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  isLoading,
  error
});
