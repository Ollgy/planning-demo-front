import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<LoginForm/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<LoginForm store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<LoginForm store={store} />);
  const inner = wrapper.children().first();

  it('contains fields in props', () => {
    expect(inner.props().fields).toBeTruthy();
  });

  it('contains validation in props', () => {
    expect(inner.props().validation).toBeTruthy();
  });
});
