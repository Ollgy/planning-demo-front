import React from 'react';
import styles from './IconButton.module.css';

const IconButton = ({ onClick, icon }) => (
  <div className={styles.iconButton} onClick={onClick}>
    <img className={styles.iconImg} src={icon} alt="icon" />
  </div>
);

export default IconButton;
