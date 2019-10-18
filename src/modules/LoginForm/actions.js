import { createAction } from 'redux-actions';

export const validateForm = createAction('VALIDATE_FORM_LOGIN');
export const resetForm = createAction('RESET_FORM_LOGIN');
export const inputForm = createAction('INPUT_FORM_LOGIN');
export const toggleChb = createAction('TOGGLE_CHB_LOGIN');
export const clearError = createAction('CLEAR_ERROR_LOGIN');
export const clearFields = createAction('CLEAR_FIELDS_LOGIN');
