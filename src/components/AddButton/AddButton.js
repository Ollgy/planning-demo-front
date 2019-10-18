import React from 'react';
import styles from './AddButton.module.css';

const AddButton = ({ onClick }) => (
  <button type="button" className={styles.addButton} onClick={onClick} />
);

export default AddButton;
