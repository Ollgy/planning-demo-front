import React from 'react';
import TaskListItem from '../TaskListItem';
import styles from './TaskList.module.css';

const TaskList = ({ list, userPermission, activities }) => (
  <div className={styles.taskListBlock}>
    <ul className={styles.taskList}>
      {list.map(data => (
        <TaskListItem
          key={data.id}
          userPermission={userPermission}
          taskData={data}
          activities={activities}
        />
      ))}
    </ul>
  </div>
);

export default TaskList;
