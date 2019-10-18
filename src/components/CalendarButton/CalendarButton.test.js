import React from 'react';
import CalendarButton from './CalendarButton';
import { shallow } from 'enzyme';

describe('<CalendarButton/> UI component', () => {
  it('prop isOpen is correct', () => {
    const isOpen = false;
    const wrapper = shallow(<CalendarButton isOpen={isOpen} />);

    expect(
      wrapper
        .children()
        .last()
        .props().in
    ).toEqual(isOpen);
  });
});
