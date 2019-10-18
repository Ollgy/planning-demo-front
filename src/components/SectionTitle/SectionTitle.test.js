import React from 'react';
import SectionTitle from './SectionTitle';
import { shallow } from 'enzyme';

describe('<SectionTitle/> UI component', () => {
  it('Title is correct', () => {
    const text = 'Test test';
    const wrapper = shallow(<SectionTitle children={text} />);

    expect(wrapper.find('span').text()).toEqual(text);
  });
});
