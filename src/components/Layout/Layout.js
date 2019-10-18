import React from 'react';
import SideBar from '../Sidebar';
import Header from '../Header';
import IconButton from '../IconButton';
import iconClean from '../IconButton/assets/clean.svg';
import styles from './Layout.module.css';

const Layout = ({ user, section, isAuthorized, logout, cleanBase }) => (
  <div className={styles.wrapper}>
    <div className={styles.cleanWrap} data-tooltip="Очистить базу">
      <IconButton onClick={cleanBase} icon={iconClean} />
    </div>
    <aside className={styles.sideBarBlock}>
      <SideBar
        isAuthorized={isAuthorized}
        userPermission={user ? user.position.permission : null}
      />
    </aside>
    <main className={styles.mainBlock}>
      {isAuthorized ? (
        <Header
          userName={{ firstName: user.firstName, lastName: user.lastName }}
          logout={logout}
        />
      ) : null}
      {section}
    </main>
  </div>
);

export default Layout;
