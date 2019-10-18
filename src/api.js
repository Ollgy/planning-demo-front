const protocol = window.location.protocol;
const host = window.location.host;

const url = `${protocol}//${host}/api`;

const urls = {
  login: `${url}/logIn`,
  authFromToken: `${url}/authFromToken`,
  saveNewUser: `${url}/saveNewUser`,
  deleteUser: `${url}/deleteUser`,
  getUsers: `${url}/getUsers`,
  getFilterUsers: `${url}/getFilterUsers`,
  getUser: `${url}/getUser`,
  updateUser: `${url}/updateUser`,
  saveUserImage: `${url}/saveUserImage`,
  saveNewTask: `${url}/saveNewTask`,
  getTasks: `${url}/getTasks`,
  updateTask: `${url}/updateTask`,
  deleteTask: `${url}/deleteTask`,
  saveNewNote: `${url}/saveNewNote`,
  getNotes: `${url}/getNotes`,
  deleteNote: `${url}/deleteNote`,
  getPositions: `${url}/getPositions`,
  cleanBase: `${url}/cleanBase`
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const api = {};

api.login = async fields =>
  fetch(urls.login, {
    headers,
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.authFromToken = () =>
  fetch(urls.authFromToken, {
    headers,
    method: 'post',
    credentials: 'include'
  }).then(response => response.json());

api.saveNewUser = async fields =>
  fetch(urls.saveNewUser, {
    headers,
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.updateUser = async (id, fields) =>
  fetch(`${urls.updateUser}/${id}`, {
    headers,
    method: 'put',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.saveUserImage = async (id, formData) =>
  fetch(`${urls.saveUserImage}/${id}`, {
    method: 'post',
    body: formData
  }).then(response => response.json());

api.deleteUser = async id =>
  fetch(`${urls.deleteUser}/${id}`, {
    headers,
    credentials: 'include',
    method: 'delete'
  }).then(response => response.json());

api.getUser = async id =>
  fetch(`${urls.getUser}/${id}`, {
    headers,
    method: 'get'
  }).then(response => response.json());

api.getUsers = () =>
  fetch(urls.getUsers, {
    headers,
    credentials: 'include',
    method: 'get'
  }).then(response => response.json());

api.getFilterUsers = async str =>
  fetch(`${urls.getFilterUsers}/${str}`, {
    headers,
    credentials: 'include',
    method: 'get'
  }).then(response => response.json());

api.saveNewTask = async fields =>
  fetch(urls.saveNewTask, {
    headers,
    method: 'post',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.getTasks = async userId =>
  fetch(`${urls.getTasks}/${userId}`, {
    headers,
    method: 'get'
  }).then(response => response.json());

api.updateTask = async (id, fields) =>
  fetch(`${urls.updateTask}/${id}`, {
    headers,
    method: 'put',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.deleteTask = async id =>
  fetch(`${urls.deleteTask}/${id}`, {
    headers,
    method: 'delete'
  }).then(response => response.json());

api.saveNewNote = async fields =>
  fetch(urls.saveNewNote, {
    headers,
    method: 'post',
    body: JSON.stringify(fields)
  }).then(response => response.json());

api.getNotes = async userId =>
  fetch(`${urls.getNotes}/${userId}`, {
    headers,
    method: 'get'
  }).then(response => response.json());

api.deleteNote = async id =>
  fetch(`${urls.deleteNote}/${id}`, {
    headers,
    method: 'delete'
  }).then(response => response.json());

api.getPositions = () =>
  fetch(urls.getPositions, {
    headers,
    method: 'get'
  }).then(response => response.json());

api.cleanBase = () =>
  fetch(urls.cleanBase, {
    headers,
    method: 'get'
  }).then(response => response.json());

export default api;
