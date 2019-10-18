import { showPswrdBlock, hidePswrdBlock } from './actions';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const pswrdBlockOpen = handleActions(
  {
    [showPswrdBlock]: () => true,
    [hidePswrdBlock]: () => false
  },
  false
);

export default combineReducers({
  pswrdBlockOpen
});
