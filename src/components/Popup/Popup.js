import React from 'react';
import Button from '../Button';
import CloseButton from '../CloseButton';
import styles from './Popup.module.css';

const Popup = ({ msg, closeClick, okClick }) => (
  <div className={styles.popupWrap}>
    <div className={styles.popup}>
      <div className={styles.popupMsg}>{msg}</div>
      <div className={styles.closeBtnBlock}>
        <CloseButton onClick={closeClick} size="m" />
      </div>
      <div className={styles.okBtnBlock}>
        <Button type="button" name="ok" onClick={okClick} children="Ok" />
      </div>
    </div>
  </div>
);

export default Popup;
