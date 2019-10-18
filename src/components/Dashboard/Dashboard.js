import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SectionTitle from '../SectionTitle';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Cap from '../Cap';
import Preloader from '../Preloader';
import { CSSTransition } from 'react-transition-group';
import {
  setDialog,
  setCurItem,
  deleteTask,
  updateTask,
  getTasks
} from '../../modules/Dashboard';
import { D, P, M } from '../../const';
import styles from './Dashboard.module.css';

class Dashboard extends PureComponent {
  componentWillUnmount() {
    const { newTaskWindow } = this.props.dialog;
    const { setCurItem } = this.props;

    setCurItem(null);
    if (newTaskWindow) {
      this.closeTaskWindow();
    }
  }

  async componentDidMount() {
    const { userId, getTasks } = this.props;

    await getTasks(userId);
  }

  openTaskWindow = (mode, data) => {
    const { setCurItem, setDialog } = this.props;

    setCurItem(data);
    setDialog({ dialog: D.newTaskWindow, value: true });
  };

  closeTaskWindow = () => {
    const { setDialog } = this.props;

    setDialog({ dialog: D.newTaskWindow, value: false });
  };

  deleteTask = async taskId => {
    const { deleteTask } = this.props;

    await deleteTask(taskId);
  };

  updateTask = async (taskId, taskData) => {
    const { updateTask } = this.props;

    await updateTask(taskId, taskData);
  };

  render() {
    const {
      userPermission,
      userName,
      dialog,
      tasks,
      curTaskItem,
      isLoading
    } = this.props;
    const { newTaskWindow } = dialog;

    return !isLoading ? (
      <section className={styles.sectionContainer}>
        <SectionTitle
          children={
            userPermission === P.manager ? 'Список задач' : 'Мои задачи'
          }
          size={userPermission === P.manager ? 's' : 'm'}
        />
        {userPermission === P.manager ? (
          <span className={styles.subtitle}>{`Сотрудник: ${userName}`}</span>
        ) : null}
        {tasks.length ? (
          <TaskList
            list={tasks}
            userPermission={userPermission}
            activities={{
              updateTask: this.updateTask,
              deleteTask: this.deleteTask,
              openTaskWindow: this.openTaskWindow.bind(null, M.update)
            }}
          />
        ) : (
          <Cap text="Текущих задач не найдено" />
        )}
        <CSSTransition
          in={newTaskWindow}
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={{
            appear: styles.appear,
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive
          }}
        >
          <NewTaskForm
            mode={M.update}
            taskData={curTaskItem}
            updateTask={this.updateTask}
            onClose={this.closeTaskWindow}
          />
        </CSSTransition>
      </section>
    ) : (
      <div className={styles.preloaderBlock}>
        <Preloader />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dialog: state.dashboard.datalist.dialog,
  curTaskItem: state.dashboard.datalist.curTaskItem,
  tasks: state.dashboard.datalist.tasks,
  isLoading: state.dashboard.getTasks.isLoading
});

const mapDispatchToProps = dispatch => ({
  updateTask: (arg1, arg2) => dispatch(updateTask(arg1, arg2)),
  deleteTask: arg => dispatch(deleteTask(arg)),
  getTasks: arg => dispatch(getTasks(arg)),
  setCurItem: arg => dispatch(setCurItem(arg)),
  setDialog: arg => dispatch(setDialog(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
