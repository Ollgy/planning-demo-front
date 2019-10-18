import { combineReducers } from 'redux';
import authFromToken from './Auth';
import login from './Login';
import loginForm from './LoginForm';
import profile from './Profile';
import personalForm from './PersonalForm';
import changePswrdForm from './ChangePswrdForm';
import newTaskForm from './NewTaskForm';
import notes from './Notes';
import dashboard from './Dashboard';
import staff from './Staff';
import cleanBase from './CleanBase';

export default combineReducers({
  authFromToken,
  login,
  loginForm,
  profile,
  personalForm,
  changePswrdForm,
  newTaskForm,
  notes,
  dashboard,
  staff,
  cleanBase
});
