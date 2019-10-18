import React from 'react';
import CloseButton from './CloseButton';
import { shallow } from 'enzyme';

describe('<CloseButton/> UI component', () => {
  it('handle click', () => {
    const _click = jest.fn();

    shallow(<CloseButton type="button" onClick={_click} />).simulate('click');

    expect(_click).toBeCalled();
  });

  it('correct size', () => {
    const btn = shallow(<CloseButton type="button" size="s" />).find('button');

    expect(btn.prop('className').includes('s')).toEqual(true);
  });
});
