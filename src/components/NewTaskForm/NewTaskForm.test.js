import React from 'react';
import NewTaskForm from './NewTaskForm';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../../modules/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

describe('<NewTaskForm/> UI component', () => {
  const shallowExpect = compose(
    expect,
    toJSON,
    shallow
  );

  it('Renders correctly', () => {
    shallowExpect(<NewTaskForm store={store} />).toMatchSnapshot();
  });

  const wrapper = shallow(<NewTaskForm store={store} />);
  const inner = wrapper.children().first();

  it('contains fields in props', () => {
    expect(inner.props().fields).toBeTruthy();
  });

  it('contains validation in props', () => {
    expect(inner.props().validation).toBeTruthy();
  });
});
