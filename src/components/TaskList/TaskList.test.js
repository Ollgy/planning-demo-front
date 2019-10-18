import React from 'react';
import TaskList from './TaskList';
import { shallow } from 'enzyme';

describe('<TaskList/> UI component', () => {
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
    const items = shallow(<TaskList list={list} />).find('TaskListItem');

    expect(items.length).toEqual(list.length);
  });
});
