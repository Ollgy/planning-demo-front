import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';

describe('<Layout/> UI component', () => {
  const user = {
    firstName: 'Иванов',
    lastName: 'Иванов',
    position: {
      permission: 'manager'
    }
  };

  it('Layout contains no-empty aside', () => {
    const wrapper = shallow(<Layout user={user} isAuthorized={true} />);

    expect(wrapper.find('aside').children().length).toBeTruthy();
  });

  it('Layout contains no-empty main', () => {
    const wrapper = shallow(<Layout user={user} isAuthorized={true} />);

    expect(wrapper.find('main').children().length).toBeTruthy();
  });
});
