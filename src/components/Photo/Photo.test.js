import React from 'react';
import Photo from './Photo';
import { shallow } from 'enzyme';

describe('<Photo/> UI component', () => {
  it("correct image's path", () => {
    const path = 'assets/img/logo.svg';
    const imgSrc = shallow(<Photo image={path} />)
      .find('img')
      .prop('src');

    expect(imgSrc).toEqual(path);
  });
});
