import React from 'react';
import AddButton from './AddButton';
import { shallow } from 'enzyme';

describe('<AddButton/> UI component', () => {
  it('handle click', () => {
    const _click = jest.fn();

    shallow(<AddButton type="button" onClick={_click} />).simulate('click');

    expect(_click).toBeCalled();
  });
});
