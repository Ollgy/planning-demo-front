import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import PersonalForm from '../PersonalForm';
import Input from '../Input';
import AddButton from '../AddButton';
import SectionTitle from '../SectionTitle';
import UserList from '../UserList';
import Popup from '../Popup';
import NewTaskForm from '../NewTaskForm';
import Dashboard from '../Dashboard';
import Cap from '../Cap';
import Preloader from '../Preloader';
import {
  setDialog,
  setCurItem,
  setInitialState,
  inputFilter,
  setViewMode,
  deleteUser,
  getFilterUsers,
  getUsers
} from '../../modules/Staff';
import { D, M, P, V } from '../../const';
import titles from '../../titles.js';
import styles from './Staff.module.css';

class Staff extends PureComponent {
  componentWillUnmount() {
    this.props.setInitialState();
  }

  async componentDidMount() {
    await this.props.getUsers();
  }

  onInputChange = async e => {
    const { getUsers, getFilterUsers } = this.props;
    const { value } = e.target;

    if (value) {
      await getFilterUsers(value);
    } else {
      await getUsers();
    }
  };

  deleteUser = async id => {
    const { deleteUser } = this.props;

    await deleteUser(id);

    this.closePopup();
  };

  openPopup = (msg, curStaffItem) => {
    const { setCurItem, setDialog } = this.props;

    setDialog({
      name: D.popup,
      value: {
        status: true,
        msg: msg || 'popup text'
      }
    });

    setCurItem(curStaffItem);
  };

  closePopup = () => {
    const { setDialog } = this.props;
    const { popup } = this.props.dialog;

    setDialog({
      name: D.popup,
      value: {
        ...popup,
        status: false
      }
    });
  };

  openTaskWindow = (mode, curStaffItem) => {
    const { view, setCurItem, setDialog, setViewMode } = this.props;

    setCurItem(curStaffItem);
    setDialog({
      name: D.newTaskWindow,
      value: {
        status: true
      }
    });

    setViewMode({
      name: view.name,
      mode: mode ? mode : ''
    });
  };

  closeTaskWindow = () => {
    const { view, setDialog, setViewMode } = this.props;

    setDialog({
      name: D.newTaskWindow,
      value: {
        status: false
      }
    });

    setViewMode({
      name: view.name,
      mode: ''
    });
  };

  setStaffMode = (viewName, mode, curStaffItem) => {
    const { setCurItem, setViewMode } = this.props;

    setCurItem(curStaffItem);
    setViewMode({
      name: viewName,
      mode: mode ? mode : ''
    });
  };

  returnToList = async e => {
    e.preventDefault();

    const { getUsers, setViewMode } = this.props;

    await getUsers();

    setViewMode({
      name: V.userlist,
      mode: M.read
    });
  };

  onClickOk = () => {
    const setDialog = this.props;
    const { popup } = this.props.dialog;

    setDialog({
      name: D.popup,
      value: {
        ...popup.value,
        userAnswer: true
      }
    });
  };

  render() {
    const { userPermission } = this.props;
    const {
      curStaffItem,
      staff,
      filterValue,
      dialog,
      view,
      personalFormMode,
      isLoading
    } = this.props;
    const { popup, newTaskWindow } = dialog;

    return !isLoading ? (
      <section className={styles.sectionContainer}>
        <CSSTransition
          in={popup.status}
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
          <Popup
            msg={popup.msg}
            closeClick={this.closePopup}
            okClick={this.deleteUser.bind(null, curStaffItem.id)}
          />
        </CSSTransition>
        <CSSTransition
          in={newTaskWindow.status}
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
            mode={view.mode}
            taskData={{ executorId: curStaffItem.id }}
            onClose={this.closeTaskWindow}
          />
        </CSSTransition>
        <SectionTitle children="Сотрудники" size="m" />
        <header className={styles.header}>
          {view.name !== V.userlist ? (
            <div className={styles.returnBlock}>
              <a
                className={styles.returnLink}
                onClick={this.returnToList}
                href=" "
                children="Вернуться к списку"
              />
            </div>
          ) : null}
          <div
            className={`${styles.searchBlock} ${
              view.name !== V.userlist ? styles.disabled : null
            }`}
          >
            <Input
              type="text"
              name="search"
              value={filterValue}
              readonly={false}
              placeholder="Поиск"
              onChange={this.onInputChange}
            />
          </div>
          <div
            className={`${styles.addButtonBlock} ${
              view.name !== V.userlist ? styles.disabled : null
            }`}
            data-tooltip="Добавить&#10;нового&#10;сотрудника"
          >
            <AddButton
              onClick={this.setStaffMode.bind(null, V.profile, M.create)}
            />
          </div>
        </header>
        {view.name === V.profile ? (
          <div className={styles.personalFormWrap}>
            <SectionTitle children={titles[personalFormMode]} size="s" />
            <PersonalForm
              permission={P.manager}
              startMode={view.mode}
              user={curStaffItem}
            />
          </div>
        ) : view.name === V.userlist ? (
          staff.length ? (
            <UserList
              list={staff}
              activities={{
                createUserTask: this.openTaskWindow.bind(null, M.create),
                deleteUser: this.deleteUser,
                openPopup: this.openPopup,
                closePopup: this.closePopup,
                updateTaskWindow: this.openTaskWindow.bind(null, M.update),
                updateUser: this.setStaffMode.bind(null, V.profile, M.update),
                getTaskList: this.setStaffMode.bind(null, V.tasklist, null)
              }}
            />
          ) : (
            <Cap text="Сотрудников не найдено" />
          )
        ) : (
          <div className={styles.dashboardWrap}>
            <Dashboard
              userId={curStaffItem.id}
              userName={`${curStaffItem.firstName} ${curStaffItem.lastName}`}
              userPermission={userPermission}
            />
          </div>
        )}
      </section>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = state => ({
  filterValue: state.staff.datalist.filterValue,
  curStaffItem: state.staff.datalist.curStaffItem,
  staff: state.staff.datalist.staff,
  dialog: state.staff.dialog.data,
  view: state.staff.view.data,
  isLoading: state.staff.getUsers.isLoading,
  personalFormMode: state.personalForm.view.mode
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getFilterUsers: arg => dispatch(getFilterUsers(arg)),
  deleteUser: arg => dispatch(deleteUser(arg)),
  setViewMode: arg => dispatch(setViewMode(arg)),
  setDialog: arg => dispatch(setDialog(arg)),
  inputFilter: arg => dispatch(inputFilter(arg)),
  setCurItem: arg => dispatch(setCurItem(arg)),
  setInitialState: () => dispatch(setInitialState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
