import React from 'react';
import Button from '../Button';
import styles from './Header.module.css';

const Header = ({ userName, logout }) => (
  <header className={styles.header}>
    <span
      className={styles.headerName}
    >{`${userName.firstName} ${userName.lastName}`}</span>
    <div className={styles.exitButton}>
      <Button type="button" size="s" onClick={logout} children="Выйти" />
    </div>
  </header>
);

export default Header;
