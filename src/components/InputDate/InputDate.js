import React from 'react';
import CalendarButton from '../CalendarButton';
import styles from '../Input/Input.module.css';

export default React.forwardRef(
  ({ name, errorClass, isOpen, activities, ...props }, ref) => (
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
      <CalendarButton isOpen={isOpen} activities={activities} />
    </div>
  )
);
