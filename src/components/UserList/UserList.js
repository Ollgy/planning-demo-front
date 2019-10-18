import React from 'react';
import UserListItem from '../UserListItem';
import styles from './UserList.module.css';

const UserList = ({ list, activities }) => (
  <div className={styles.userListBlock}>
    <ul className={styles.userList}>
      {list.map(data => (
        <UserListItem key={data.id} data={data} activities={activities} />
      ))}
    </ul>
  </div>
);

export default UserList;
