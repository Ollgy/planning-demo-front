import React from 'react';
import FormMsg from './FormMsg';
import { shallow } from 'enzyme';

describe('<FormMsg/> UI component', () => {
  it('Message is correct', () => {
    const text = 'Test msg';
    const wrapper = shallow(<FormMsg children={text} />);

    expect(wrapper.text()).toEqual(text);
  });
});
