import { setFields, inputForm, validateForm, clearError } from '../actions';
import validate from '../utils/validate';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const initialFields = {
  lastName: '',
  firstName: '',
  middleName: '',
  position: '',
  birthDate: '',
  phone: '',
  email: '',
  messengers: '',
  image: ''
};

const initialValidation = {
  status: false,
  msg: '',
  error: '',
  errorInputs: []
};

const fields = handleActions(
  {
    [setFields]: (_state, action) =>
      action.payload
        ? Object.keys(initialFields).reduce(
            (obj, prop) => ({
              ...obj,
              [prop]: action.payload[prop] ? action.payload[prop] : _state[prop]
            }),
            {}
          )
        : Object.keys(initialFields).reduce(
            (obj, prop) => ({ ...obj, [prop]: initialFields[prop] }),
            {}
          ),

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
