import React from 'react';
import styles from './Cap.module.css';

const Cap = ({ text }) => (
  <div className={styles.cap}>
    <span>{text}</span>
  </div>
);

export default Cap;
