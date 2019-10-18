import React from 'react';
import styles from '../Input/Input.module.css';

const InputDataList = React.forwardRef(
  ({ name, list, errorClass, ...props }, ref) => (
    <div
      className={`${styles.inputWrap} ${errorClass ? styles[errorClass] : ''}`}
    >
      <input
        className={`${styles.input}  ${errorClass ? styles['error'] : ''}`}
        type="text"
        name={name}
        list={name}
        {...props}
      />
      <datalist id={name}>
        {list.map(listItem => (
          <option key={listItem.id}>{listItem.name}</option>
        ))}
      </datalist>
    </div>
  )
);

export default InputDataList;
