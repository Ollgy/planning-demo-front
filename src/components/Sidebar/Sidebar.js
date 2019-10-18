import React from 'react';
import Nav from '../Nav';
import Calendar from 'react-calendar';
import styles from './Sidebar.module.css';
import './Calendar.css';
import logo from './assets/logo.png';

const SideBar = ({ isAuthorized, userPermission }) => (
  <div className={styles.container}>
    <div className={styles.logoBlock}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
    <div className={styles.calendarBlock}>
      <Calendar value={new Date()} onClickDay={e => console.log(e)} />
    </div>
    <div className={styles.navBlock}>
      {isAuthorized ? <Nav userPermission={userPermission} /> : null}
    </div>
  </div>
);

export default SideBar;
