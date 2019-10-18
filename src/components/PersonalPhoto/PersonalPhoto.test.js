import React from 'react';
import PersonalPhoto from './PersonalPhoto';
import { shallow } from 'enzyme';

describe('<PersonalPhoto/> UI component', () => {
  it('contains Photo', () => {
    const wrapper = shallow(<PersonalPhoto />);

    expect(wrapper.exists('Photo')).toEqual(true);
  });
});
