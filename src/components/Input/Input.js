import React from 'react';
import styles from './Input.module.css';

export default React.forwardRef(({ name, errorClass, ...props }, ref) => (
  <div
    className={`${styles.inputWrap} ${styles[name] || ''} ${
      errorClass ? styles[errorClass] : ''
    }`}
  >
    <input
      className={`${styles.input}  ${errorClass ? styles['error'] : ''}`}
      id={name}
      ref={ref}
      name={name}
      {...props}
    />
  </div>
));
