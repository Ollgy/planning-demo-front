import React from 'react';
import PersonalForm from './PersonalForm';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<PersonalForm/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<PersonalForm store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<PersonalForm store={store} />);
  const inner = wrapper.children().first();

  it('contains fields in props', () => {
    expect(inner.props().fields).toBeTruthy();
  });

  it('contains positions in props', () => {
    expect(inner.props().positions).toBeTruthy();
  });
});
