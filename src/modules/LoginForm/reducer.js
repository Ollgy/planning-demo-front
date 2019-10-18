import {
  validateForm,
  resetForm,
  inputForm,
  toggleChb,
  clearFields,
  clearError
} from './actions';
import validate from './utils/validate';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

export const initialFields = {
  login: '',
  password: '',
  remembered: false
};

const initialValidation = {
  status: false,
  msg: '',
  error: '',
  errorInputs: []
};

const fields = handleActions(
  {
    [resetForm]: () => initialFields,

    [clearFields]: (_state, action) =>
      Object.keys(initialFields).reduce(
        (obj, prop) => ({
          ...obj,
          [prop]: action.payload[prop] ? initialFields[prop] : _state[prop]
        }),
        {}
      ),

    [inputForm]: (_state, action) => ({
      ..._state,
      [action.payload.input]: action.payload.value
    }),

    [toggleChb]: _state => ({ ..._state, remembered: !_state.remembered })
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
    },

    [resetForm]: () => initialValidation
  },
  initialValidation
);

export default combineReducers({
  fields,
  validation
});
