import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('<Button/> UI component', () => {
  it('handle click', () => {
    const _click = jest.fn();

    shallow(<Button type="button" onClick={_click} />).simulate('click');

    expect(_click).toBeCalled();
  });

  it('correct label', () => {
    const label = shallow(<Button type="button" children="text" />)
      .find('input')
      .prop('value');

    expect(label).toEqual('text');
  });

  it('correct size', () => {
    const btn = shallow(<Button type="button" size="s" />).find('input');

    expect(btn.prop('className').includes('s')).toEqual(true);
  });
});
