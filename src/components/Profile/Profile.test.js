import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<Profile/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<Profile store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<Profile store={store} />);
  const inner = wrapper.children().first();

  it('contains pswrdBlock is closed', () => {
    expect(inner.props().pswrdBlockOpen).toEqual(false);
  });
});
