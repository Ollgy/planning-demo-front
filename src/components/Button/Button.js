import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, size, ...props }) => (
  <input
    className={`${styles.button} ${size ? styles[size] : null}`}
    value={children}
    {...props}
  />
);

export default Button;
