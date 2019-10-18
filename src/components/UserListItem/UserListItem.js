import React from 'react';
import Photo from '../Photo';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import iconTaskList from '../IconButton/assets/taskList.svg';
import iconTask from '../IconButton/assets/task.svg';
import iconEdit from '../IconButton/assets/edit.svg';
import texts from '../../texts';
import styles from './UserListItem.module.css';

const { deleteUserPopupMsg: popupMsg } = texts;

const UserListItem = ({ key, data, activities }) => (
  <li className={styles.userListItem}>
    <div className={styles.infoBlock}>
      <div className={styles.photoBlock}>
        <Photo image={data.image} size="s" />
      </div>
      <div className={styles.nameBlock}>
        <span>{`${data.lastName} ${data.firstName} ${data.middleName}`}</span>
      </div>
    </div>
    <div className={styles.buttonBlock}>
      <div className={styles.buttonWrap} data-tooltip="Список задач сотрудника">
        <IconButton
          onClick={activities.getTaskList.bind(null, {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName
          })}
          icon={iconTaskList}
        />
      </div>
      <div
        className={styles.buttonWrap}
        data-tooltip="Добавить задачу&#10;сотруднику"
      >
        <IconButton
          onClick={activities.createUserTask.bind(null, { id: data.id })}
          icon={iconTask}
        />
      </div>
      <div
        className={styles.buttonWrap}
        data-tooltip="Редактировать данные&#10;сотрудника"
      >
        <IconButton
          onClick={activities.updateUser.bind(null, { ...data })}
          icon={iconEdit}
        />
      </div>
      <div
        className={styles.buttonWrap}
        data-tooltip="Удалить&#10;сотрудника"
      >
        <CloseButton
          onClick={activities.openPopup.bind(null, popupMsg, { id: data.id })}
          size="m"
        />
      </div>
    </div>
  </li>
);

export default UserListItem;
