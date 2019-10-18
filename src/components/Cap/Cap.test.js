import React from 'react';
import Cap from './Cap';
import { shallow } from 'enzyme';

describe('<Cap/> UI component', () => {
  it('Message is correct', () => {
    const text = 'Test test';
    const wrapper = shallow(<Cap text={text} />);

    expect(wrapper.find('span').text()).toEqual(text);
  });
});
