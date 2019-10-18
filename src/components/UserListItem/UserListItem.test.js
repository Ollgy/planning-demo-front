import React from 'react';
import UserListItem from './UserListItem';
import { shallow } from 'enzyme';

describe('<UserListItem/> UI component', () => {
  const wrapper = shallow(
    <UserListItem
      data={{}}
      activities={{
        getTaskList: f => f,
        createUserTask: f => f,
        updateUser: f => f,
        openPopup: f => f
      }}
    />
  );

  it('contains CloseButton', () => {
    expect(wrapper.exists('CloseButton')).toEqual(true);
  });

  it('contains IconButton', () => {
    expect(wrapper.exists('IconButton')).toEqual(true);
  });
});
