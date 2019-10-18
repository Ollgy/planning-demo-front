import React from 'react';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';

describe('<Sidebar/> UI component', () => {
  const wrapper = shallow(<Sidebar isAuthorized={true} />);

  it('contains Nav', () => {
    expect(wrapper.exists('Nav')).toEqual(true);
  });

  it('contains Calendar', () => {
    expect(wrapper.exists('Calendar')).toEqual(true);
  });
});
