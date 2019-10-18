import React from 'react';
import InputDataList from './InputDataList';
import { shallow } from 'enzyme';

describe('<InputDataList/> UI component', () => {
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
    const items = shallow(<InputDataList list={list} />)
      .find('datalist')
      .find('option');

    expect(items.length).toEqual(list.length);
  });
});
