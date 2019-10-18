import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({ userPermission }) => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          exact
          to="/dashboard"
          className={styles.navLink}
          activeClassName="active"
          children="Рабочий стол"
        />
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/profile"
          className={styles.navLink}
          activeClassName="active"
          children="Профиль"
        />
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/notes"
          className={styles.navLink}
          activeClassName="active"
          children="Заметки"
        />
      </li>
      {userPermission === 'manager' ? (
        <li className={styles.navItem}>
          <NavLink
            to="/staff"
            className={styles.navLink}
            activeClassName="active"
            children="Сотрудники"
          />
        </li>
      ) : null}
    </ul>
  </nav>
);

export default Nav;
