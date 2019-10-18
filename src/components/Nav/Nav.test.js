import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('<Nav/> UI component', () => {
  const permission = 'manager';
  const wrapper = shallow(<Nav permission={permission} />);

  it('Nav contains items', () => {
    expect(wrapper.find('ul').children().length).toBeTruthy();
  });
});
