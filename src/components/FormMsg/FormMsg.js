import React from 'react';
import styles from './FormMsg.module.css';

const FormMsg = ({ children }) => (
  <div className={styles.formMsg}>{children}</div>
);

export default FormMsg;
