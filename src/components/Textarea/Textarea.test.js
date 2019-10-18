import React from 'react';
import Textarea from './Textarea';
import { shallow } from 'enzyme';

describe('<Textarea/> UI component', () => {
  it('handle change', () => {
    const _change = jest.fn();

    shallow(<Textarea onChange={_change} />)
      .find('textarea')
      .simulate('change');

    expect(_change).toBeCalled();
  });
});
