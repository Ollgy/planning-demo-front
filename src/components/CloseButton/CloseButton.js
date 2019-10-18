import React from 'react';
import styles from './CloseButton.module.css';

const CloseButton = ({ size, onClick }) => (
  <button
    type="button"
    className={`${styles.closeButton} ${styles[size]}`}
    onClick={onClick}
  />
);

export default CloseButton;
