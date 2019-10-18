import React from 'react';
import Staff from './Staff';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<Staff/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<Staff store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<Staff store={store} />);
  const inner = wrapper.children().first();

  it('contains staff in props', () => {
    expect(inner.props().staff).toBeTruthy();
  });
});
