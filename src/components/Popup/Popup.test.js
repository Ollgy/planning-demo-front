import React from 'react';
import Popup from './Popup';
import { shallow } from 'enzyme';

describe('<Popup/> UI component', () => {
  const wrapper = shallow(<Popup />);

  it('contains CloseButton', () => {
    expect(wrapper.exists('CloseButton')).toEqual(true);
  });

  it('contains Button', () => {
    expect(wrapper.exists('Button')).toEqual(true);
  });
});
