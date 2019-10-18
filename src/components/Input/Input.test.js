import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('<Input/> UI component', () => {
  it('handle change', () => {
    const _change = jest.fn();

    shallow(<Input type="text" onChange={_change} />)
      .find('input')
      .simulate('change');

    expect(_change).toBeCalled();
  });

  it('correct name', () => {
    const date = 'date';
    const name = shallow(<Input type="text" name={date} />)
      .find('input')
      .prop('name');

    expect(name).toEqual(date);
  });
});
