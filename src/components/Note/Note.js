import React from 'react';
import CloseButton from '../CloseButton';
import styles from './Note.module.css';

const Note = ({ note, animAppear, activities }) => (
  <div
    className={`${styles.noteContainer} ${
      animAppear ? styles.appearing : null
    }`}
  >
    <header className={styles.header}>
      <div className={styles.dateBlock}>
        <span className="t_noteDate">{note.date}</span>
      </div>
      <div className={styles.closeButtonBlock}>
        <CloseButton
          size="s"
          onClick={activities.deleteNote.bind(null, note.id)}
        />
      </div>
    </header>
    <div className={styles.textBlock}>
      <span className="t_noteText">{note.text}</span>
    </div>
  </div>
);

export default Note;
