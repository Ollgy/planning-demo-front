import React from 'react';
import ChangePswrdForm from './ChangePswrdForm';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<ChangePswrdForm/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<ChangePswrdForm store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<ChangePswrdForm store={store} />);
  const inner = wrapper.children().first();

  it('contains fields in props', () => {
    expect(inner.props().fields).toBeTruthy();
  });
});
