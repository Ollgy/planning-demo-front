import React from 'react';
import Notes from './Notes';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<Notes/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<Notes store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<Notes store={store} />);
  const inner = wrapper.children().first();

  it('contains fields in props', () => {
    expect(inner.props().fields).toBeTruthy();
  });
});
