import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AddButton from '../AddButton';
import Textarea from '../Textarea';
import Note from '../Note';
import Preloader from '../Preloader';
import {
  inputForm,
  clearAnim,
  clearFields,
  deleteNote,
  saveNewNote,
  getNotes
} from '../../modules/Notes';
import { F } from '../../const';
import getformattedTime from '../NewTaskForm/utils/formattedTime';
import styles from './Notes.module.css';

class Notes extends PureComponent {
  constructor(props) {
    super(props);
    this.activeInput = React.createRef();
  }

  async componentDidMount() {
    const { user, getNotes } = this.props;

    await getNotes(user.id);

    this.activeInput.current.focus();
  }

  onInputChange = e => {
    const { inputForm } = this.props;
    const { value, name } = e.target;

    inputForm({ input: name, value });
  };

  saveNewNote = async () => {
    const { fields, saveNewNote, clearAnim, clearFields } = this.props;
    const { text } = fields;

    if (text) {
      await saveNewNote({ text, date: getformattedTime() });
      clearFields();
      setTimeout(clearAnim, 1000);
    }
  };

  deleteNote = async taskId => {
    const { deleteNote } = this.props;

    await deleteNote(taskId);
  };

  render() {
    const { fields, animAppear, notelist, isLoading } = this.props;

    return !isLoading ? (
      <section className={styles.sectionContainer}>
        <div className={styles.panel}>
          <div className={styles.textBlock}>
            <Textarea
              ref={this.activeInput}
              type="text"
              name={F.text}
              value={fields.text}
              onChange={this.onInputChange}
              placeholder="Текст заметки . . ."
              size="big"
            />
          </div>
          <div className={styles.addBlock} data-tooltip="Добавить заметку">
            <AddButton onClick={this.saveNewNote} />
          </div>
        </div>
        {notelist.map(note => (
          <Note
            key={note.id}
            note={note}
            animAppear={animAppear}
            activities={{ deleteNote: this.deleteNote }}
          />
        ))}
      </section>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = state => ({
  fields: state.notes.datalist.fields,
  animAppear: state.notes.datalist.animAppear,
  notelist: state.notes.datalist.notelist,
  isLoading: state.notes.getNotes.isLoading
});

const mapDispatchToProps = dispatch => ({
  saveNewNote: arg => dispatch(saveNewNote(arg)),
  deleteNote: arg => dispatch(deleteNote(arg)),
  getNotes: arg => dispatch(getNotes(arg)),
  inputForm: arg => dispatch(inputForm(arg)),
  clearAnim: () => dispatch(clearAnim()),
  clearFields: () => dispatch(clearFields())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
