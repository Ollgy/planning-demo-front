import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ ...props }) => <input className={styles.chb} {...props} />;

export default Checkbox;
