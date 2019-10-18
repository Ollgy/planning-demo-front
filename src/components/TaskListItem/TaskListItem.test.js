import React from 'react';
import TaskListItem from './TaskListItem';
import { shallow } from 'enzyme';

describe('<TaskListItem/> UI component', () => {
  const wrapper = shallow(
    <TaskListItem
      userPermission="manager"
      taskData={{
        date: {
          create: '',
          begin: '',
          done: ''
        }
      }}
      activities={{
        deleteTask: f => f,
        updateTask: f => f,
        openTaskWindow: f => f
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
