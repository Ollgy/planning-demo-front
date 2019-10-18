import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header/> UI component', () => {
  it('Title is correct', () => {
    const userName = {
      firstName: 'Иван',
      lastName: 'Иванов'
    };
    const wrapper = shallow(<Header userName={userName} />);

    expect(wrapper.find('span').text()).toEqual(
      `${userName.firstName} ${userName.lastName}`
    );
  });
});
