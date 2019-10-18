import React from 'react';
import styles from './Textarea.module.css';

export default React.forwardRef(({ name, errorClass, size, ...props }, ref) => (
  <div
    className={`${styles.textareaWrap} ${styles[name] || null} ${
      size ? styles[size] : null
    } ${errorClass ? styles[errorClass] : null}`}
  >
    <textarea
      className={`${styles.textarea}  ${errorClass ? styles['error'] : null}`}
      id={name}
      ref={ref}
      name={name}
      {...props}
    />
  </div>
));
