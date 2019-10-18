import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './components/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from './modules/rootReducer';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
