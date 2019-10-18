import React from 'react';
import UserList from './UserList';
import { shallow } from 'enzyme';

describe('<UserList/> UI component', () => {
  it('renders list correctly', () => {
    const list = [
      {
        id: 1,
        name: 'apple'
      },
      {
        id: 2,
        name: 'orange'
      },
      {
        id: 3,
        name: 'banana'
      }
    ];
    const items = shallow(<UserList list={list} />).find('UserListItem');

    expect(items.length).toEqual(list.length);
  });
});
