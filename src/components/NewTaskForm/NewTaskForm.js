import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CloseButton from '../CloseButton';
import Button from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import FormMsg from '../FormMsg';
import getformattedTime from './utils/formattedTime';
import {
  inputForm,
  setFields,
  setInitialState,
  setMsgForm,
  validateForm,
  clearError,
  getUser,
  saveNewTask
} from '../../modules/NewTaskForm';
import { F, M } from '../../const';
import styles from './NewTaskForm.module.css';
import texts from '../../texts';
import formStyles from '../LoginForm/LoginForm.module.css';

class NewTaskForm extends PureComponent {
  constructor(props) {
    super(props);
    this.activeInput = React.createRef();
  }

  componentWillUnmount() {
    this.props.setInitialState();
  }

  async componentDidMount() {
    let { taskData, mode, getUser, setFields } = this.props;

    if (mode === M.create) {
      await getUser(taskData.executorId);
    }

    setFields({
      task: taskData.task || '',
      comment: taskData.comment || ''
    });

    this.activeInput.current.focus();
  }

  onInputChange = e => {
    const { inputForm, clearError } = this.props;
    const { value, name } = e.target;

    inputForm({ input: name, value });
    clearError({ input: name });
  };

  onSubmit = async e => {
    e.preventDefault();

    const mode = e.target.name;

    const {
      fields,
      taskData,
      validateForm,
      saveNewTask,
      updateTask,
      setMsgForm
    } = this.props;

    await validateForm(fields);

    const { validation } = this.props;

    if (validation.status && mode === M.create) {
      await saveNewTask({
        ...fields,
        date: {
          create: getformattedTime(),
          begin: '',
          done: ''
        }
      });
      setMsgForm(texts.addTask);
    } else if (validation.status && mode === M.update) {
      await updateTask(taskData.id, fields);
      setMsgForm(texts.updTask);
    }

    if (this.activeInput) {
      this.activeInput.current.focus();
    }
  };

  render() {
    const { fields, validation, mode, onClose } = this.props;
    const { errorInputs, error } = validation;

    return (
      <div className={styles.container}>
        <div className={styles.formWrap}>
          <form action="/" method="post" onSubmit={this.onSubmit} name={mode}>
            <span
              className={styles.title}
              children={`Сотрудник: ${fields.executorName}`}
            />
            <div
              className={`${formStyles.formItem} ${formStyles.formItemWide}`}
              key={F.task}
            >
              <Input
                type="text"
                ref={this.activeInput}
                name={F.task}
                value={fields[F.task]}
                readonly={false}
                placeholder=". . ."
                errorClass={errorInputs.includes(F.task) ? error : null}
                onChange={this.onInputChange}
              />
              <label className={formStyles.formLabel} htmlFor={F.task}>
                <span>Задача</span>
              </label>
            </div>
            <div
              className={`${formStyles.formItem} ${formStyles.formItemColumn}`}
              key={F.comment}
            >
              <Textarea
                size="big"
                name={F.comment}
                value={fields[F.comment]}
                readonly={false}
                placeholder=". . ."
                onChange={this.onInputChange}
              />
              <label className={formStyles.formLabel} htmlFor={F.comment}>
                <span>{texts.commentTask}</span>
              </label>
            </div>
            <div className={styles.msgBlock}>
              <FormMsg children={validation.msg} />
            </div>
            <div className={styles.buttonBlock}>
              {mode === M.create ? (
                <Button
                  type="submit"
                  name="create"
                  children="Добавить задачу"
                />
              ) : (
                <Button type="submit" name="update" children="Редактировать" />
              )}
            </div>
          </form>
          <div className={styles.closeButtonBlock}>
            <CloseButton size="s" onClick={onClose} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fields: state.newTaskForm.datalist.fields,
  validation: state.newTaskForm.datalist.validation,
  executor: state.newTaskForm.executor.user
});

const mapDispatchToProps = dispatch => ({
  saveNewTask: arg => dispatch(saveNewTask(arg)),
  getUser: arg => dispatch(getUser(arg)),
  setFields: arg => dispatch(setFields(arg)),
  setInitialState: () => dispatch(setInitialState()),
  setMsgForm: arg => dispatch(setMsgForm(arg)),
  inputForm: arg => dispatch(inputForm(arg)),
  validateForm: arg => dispatch(validateForm(arg)),
  clearError: arg => dispatch(clearError(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);
