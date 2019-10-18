import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';

describe('<Checkbox/> UI component', () => {
  it('prop checked is correct', () => {
    const wrapper = shallow(<Checkbox checked={true} />);

    expect(wrapper.props().checked).toEqual(true);
  });
});
