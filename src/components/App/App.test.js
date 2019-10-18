import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

const wrapApp = (
  <StoreProvider str="str" store={store}>
    <App />
  </StoreProvider>
);

describe('<App/> UI component', () => {
  it('render correctly', () => {
    const div = document.createElement('div');

    ReactDOM.render(wrapApp, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains App', () => {
    const wrapper = shallow(wrapApp);

    expect(wrapper.contains(<App />)).toEqual(true);
  });
});
