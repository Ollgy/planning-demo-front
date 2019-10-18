import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<Dashboard/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<Dashboard store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<Dashboard store={store} />);
  const inner = wrapper.children().first();

  it('contains tasks in props', () => {
    expect(inner.props().tasks).toBeTruthy();
  });
});
