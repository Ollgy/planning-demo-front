import React from 'react';
import CloseButton from '../CloseButton';
import IconButton from '../IconButton';
import iconWork from '../IconButton/assets/work.svg';
import iconDone from '../IconButton/assets/done.svg';
import iconEdit from '../IconButton/assets/edit.svg';
import getformattedTime from '../NewTaskForm/utils/formattedTime';
import { P } from '../../const';
import styles from './TaskListItem.module.css';

const TaskListItem = ({ key, userPermission, taskData, activities }) => (
  <li className={styles.taskListItem}>
    <div className={styles.infoBlock}>
      <div className={styles.taskBlock}>
        <span children={taskData.task} />
      </div>
      <div className={styles.commentBlock}>
        <span children={taskData.comment} />
      </div>
      <div className={styles.statusBlock}>
        <span children="Статус задачи: " />
        <span
          className={`${styles.status} ${styles[taskData.status]}`}
          children={taskData.status}
        />
      </div>
      <div className={styles.authorBlock}>
        <span children={`Отправитель:  ${taskData.authorName}`} />
      </div>
      <div className={styles.dateBlock}>
        <span children={`Назначено:  ${taskData.date.create}`} />
        {taskData.date.begin ? (
          <span children={`Взято в работу:  ${taskData.date.begin}`} />
        ) : null}
        {taskData.date.done ? (
          <span children={`Выполнено:  ${taskData.date.done}`} />
        ) : null}
      </div>
    </div>
    <div className={styles.buttonBlock}>
      <div className={styles.buttonWrap} data-tooltip="Взять в работу">
        <IconButton
          onClick={activities.updateTask.bind(null, taskData.id, {
            status: 'active',
            date: { ...taskData.date, begin: getformattedTime(), done: '' }
          })}
          icon={iconWork}
        />
      </div>
      <div
        className={styles.buttonWrap}
        data-tooltip="Отметить,&#10;как выполненное"
      >
        <IconButton
          onClick={activities.updateTask.bind(null, taskData.id, {
            status: 'done',
            date: { ...taskData.date, done: getformattedTime() }
          })}
          icon={iconDone}
        />
      </div>
      {userPermission === P.manager ? (
        <div
          className={styles.buttonWrap}
          data-tooltip="Редактировать условия&#10;задачи"
        >
          <IconButton
            onClick={activities.openTaskWindow.bind(null, taskData)}
            icon={iconEdit}
          />
        </div>
      ) : null}
      {userPermission === P.manager ? (
        <div className={styles.buttonWrap} data-tooltip="Снять задачу">
          <CloseButton
            onClick={activities.deleteTask.bind(null, taskData.id)}
            size="m"
          />
        </div>
      ) : null}
    </div>
  </li>
);

export default TaskListItem;
