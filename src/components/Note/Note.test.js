import React from 'react';
import Note from './Note';
import { shallow } from 'enzyme';

describe('<Note/> UI component', () => {
  const note = {
    date: '26.04.2019',
    text: 'Text'
  };

  const activities = {
    deleteNote: f => f
  };

  const wrapper = shallow(<Note note={note} activities={activities} />);

  it('text is correct', () => {
    expect(wrapper.find('.t_noteText').text()).toEqual(note.text);
  });

  it('date is correct', () => {
    expect(wrapper.find('.t_noteDate').text()).toEqual(note.date);
  });
});
