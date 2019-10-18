import React from 'react';
import IconButton from './IconButton';
import { shallow } from 'enzyme';

describe('<IconButton/> UI component', () => {
  it('handle click', () => {
    const _click = jest.fn();

    shallow(<IconButton onClick={_click} />).simulate('click');

    expect(_click).toBeCalled();
  });

  it("correct image's path", () => {
    const path = 'assets/img/logo.svg';
    const imgSrc = shallow(<IconButton icon={path} />)
      .find('img')
      .prop('src');

    expect(imgSrc).toEqual(path);
  });
});
