import { inputForm, validateForm, clearError } from '../actions';
import validate from '../utils/validate';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialFields = {
  oldPassword: '',
  newPassword: '',
  rptPassword: ''
};

const initialValidation = {
  status: false,
  msg: '',
  error: '',
  errorInputs: []
};

const fields = handleActions(
  {
    [inputForm]: (_state, action) => ({
      ..._state,
      [action.payload.input]: action.payload.value
    })
  },
  initialFields
);

const validation = handleActions(
  {
    [validateForm]: (_state, action) => validate(action.payload),

    [clearError]: (_state, action) => {
      const nextErrInputs = _state.errorInputs.filter(
        input => input !== action.payload.input
      );

      return {
        ..._state,
        errorInputs: nextErrInputs,
        msg: nextErrInputs.length ? _state.msg : ''
      };
    }
  },
  initialValidation
);

export default combineReducers({
  fields,
  validation
});
