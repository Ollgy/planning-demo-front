import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import PersonalPhoto from '../PersonalPhoto';
import Input from '../Input';
import InputDataList from '../InputDataList';
import InputDate from '../InputDate';
import Textarea from '../Textarea';
import FormMsg from '../FormMsg';
import Preloader from '../Preloader';

import { labels, placeholders } from './labels';
import prepareText from './utils/prepareText';
import {
  getPositions,
  setFields,
  setViewMode,
  setDialog,
  inputForm,
  validateForm,
  clearError,
  saveUserImage,
  saveNewUser,
  updateUser
} from '../../modules/PersonalForm';

import { M, D, F, P } from '../../const';
import styles from '../Profile/Profile.module.css';
import formStyles from '../LoginForm/LoginForm.module.css';

const readOnly = ['firstName', 'lastName', 'middleName', 'email', 'position'];

class PersonalForm extends PureComponent {
  constructor(props) {
    super(props);
    this.activeInput = React.createRef();
  }

  componentWillUnmount() {
    this.props.setFields();
  }

  async componentDidMount() {
    const {
      user,
      startMode,
      getPositions,
      setFields,
      setViewMode
    } = this.props;

    setViewMode(startMode);

    await getPositions();

    if (startMode !== M.create && user) {
      setFields({ ...user, position: user.position.name });
    } else {
      setFields();
    }

    if (this.activeInput.current) {
      this.activeInput.current.focus();
    }
  }

  onInputChange = e => {
    const { inputForm, clearError } = this.props;
    const { value, name } = e.target;

    inputForm({ input: name, value });
    clearError({ input: name });
  };

  onInputSelect = (positions, e) => {
    const { setFields, clearError } = this.props;
    const { value, name } = e.target;

    if (positions.includes(value)) {
      setFields({ [name]: value });
      clearError({ input: name });
    }
  };

  onUpdateMode = e => {
    e.preventDefault();

    this.props.setViewMode(M.update);

    if (this.activeInput.current) {
      this.activeInput.current.focus();
    }
  };

  onPhotoUpload = e => {
    const { setFields } = this.props;
    const input = e.target;
    const reader = new FileReader();

    reader.onload = e => setFields({ image: e.target.result });

    if (input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
  };

  onSetDate = async (strDate, field) => {
    const { setFields, setDialog } = this.props;

    setFields({ [field]: strDate });
    setDialog({ name: D.calendar, status: false });
  };

  onSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const mode = form.name;
    const imgUpload = form.querySelector('#file').files[0];
    const {
      fields,
      positions,
      user = {},
      validateForm,
      setViewMode,
      saveNewUser,
      saveUserImage,
      updateUser
    } = this.props;

    await validateForm({ fields, positions });

    const { validation } = this.props;

    const updateFields = Object.keys(fields).filter(field =>
      field === F.position
        ? fields[field] !== (user[field] ? user[field].name : null)
        : fields[field] !== user[field] && field !== F.image
    );

    const pos = positions.find(pos => pos.name === fields.position);

    if (validation.status && mode === M.create) {
      await saveNewUser({
        ...fields,
        position: { id: pos.id, name: pos.name, permission: pos.permission },
        image: ''
      });
    } else if (validation.status && mode === M.update && updateFields.length) {
      const updateData = updateFields.reduce(
        (obj, field) => ({ ...obj, [field]: fields[field] }),
        {}
      );

      if (updateData.position) {
        updateData.position = {
          id: pos.id,
          name: pos.name,
          permission: pos.permission
        };
      }

      const { userNew } = this.props;

      await updateUser(user.id ? user.id : userNew.id, updateData);
    }

    const { userNew } = this.props;

    if (imgUpload) {
      await saveUserImage(userNew ? userNew.id : user.id, new FormData(form));
    }

    validation.status ? setViewMode(M.read) : this.activeInput.current.focus();
  };

  render() {
    const {
      labels,
      permission,
      fields,
      validation,
      positions,
      mode,
      dialog,
      isLoading,
      setDialog
    } = this.props;
    const { msg, error, errorInputs } = validation;

    return !isLoading ? (
      <form
        action="/"
        encType="multipart/form-data"
        className={styles.formData}
        onSubmit={this.onSubmit}
        name={mode}
      >
        <div className={styles.infoWrap}>
          <div className={styles.infoBlock}>
            {Object.keys(fields)
              .filter(field => field !== F.image)
              .map((field, i) => (
                <div className={formStyles.formItem} key={field}>
                  {mode === M.read ? (
                    <span
                      className={styles.formValue}
                      dangerouslySetInnerHTML={{
                        __html: fields[field]
                          ? prepareText(field, fields[field])
                          : ''
                      }}
                    />
                  ) : field === F.birthDate ? (
                    <InputDate
                      type="text"
                      name={field}
                      ref={errorInputs[0] === field ? this.activeInput : null}
                      value={fields[field]}
                      readOnly={true}
                      placeholder={placeholders[field]}
                      errorClass={errorInputs.includes(field) ? error : null}
                      onFocus={setDialog.bind(null, {
                        name: D.calendar,
                        status: true
                      })}
                      isOpen={dialog.calendar}
                      activities={{
                        openDialog: setDialog.bind(null, {
                          name: D.calendar,
                          status: true
                        }),
                        closeDialog: setDialog.bind(null, {
                          name: D.calendar,
                          status: false
                        }),
                        setDate: this.onSetDate
                      }}
                    />
                  ) : field === F.position ? (
                    <InputDataList
                      name={field}
                      ref={errorInputs[0] === field ? this.activeInput : null}
                      value={fields[field]}
                      placeholder={placeholders[field]}
                      readOnly={
                        mode !== M.create &&
                        permission !== P.manager &&
                        readOnly.includes(field)
                      }
                      errorClass={errorInputs.includes(field) ? error : null}
                      list={positions}
                      onChange={this.onInputChange}
                    />
                  ) : field === F.messengers ? (
                    <Textarea
                      ref={errorInputs.length ? null : this.activeInput}
                      name={field}
                      value={fields[field]}
                      placeholder={placeholders[field]}
                      onChange={this.onInputChange}
                      onFocus={setDialog.bind(null, {
                        name: D.calendar,
                        status: false
                      })}
                      errorClass={errorInputs.includes(field) ? error : null}
                    />
                  ) : (
                    <Input
                      type="text"
                      ref={
                        errorInputs.length
                          ? field === errorInputs[0]
                            ? this.activeInput
                            : null
                          : null
                      }
                      name={field}
                      value={fields[field]}
                      readOnly={
                        mode !== M.create &&
                        permission !== P.manager &&
                        readOnly.includes(field)
                      }
                      placeholder={placeholders[field]}
                      onChange={this.onInputChange}
                      onFocus={setDialog.bind(null, {
                        name: D.calendar,
                        status: false
                      })}
                      errorClass={errorInputs.includes(field) ? error : null}
                    />
                  )}
                  <label className={formStyles.formLabel} htmlFor={field}>
                    <span>{labels[field]}</span>
                  </label>
                </div>
              ))}
          </div>
          <div className={styles.msgBlock}>
            <FormMsg children={msg} />
          </div>
          <div className={styles.buttonBlock}>
            {mode === M.read ? (
              <Button
                type="button"
                name="update"
                onClick={this.onUpdateMode}
                children="Редактировать"
              />
            ) : mode === M.create ? (
              <Button
                type="submit"
                name="create"
                children="Добавить пользователя"
              />
            ) : (
              <Button type="submit" name="save" children="Сохранить" />
            )}
          </div>
        </div>
        <div className={styles.photoBlock}>
          <PersonalPhoto
            image={fields.image}
            mode={mode}
            onPhotoUpload={this.onPhotoUpload}
          />
        </div>
      </form>
    ) : (
      <Preloader />
    );
  }
}

const withData = labels => Component => {
  const wrap = props => <Component {...props} labels={labels} />;

  wrap.displayName = `WithData(${getDisplayName(Component)})`;

  return wrap;
};

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const mapStateToProps = state => ({
  positions: state.personalForm.positions.items,
  fields: state.personalForm.datalist.fields,
  validation: state.personalForm.datalist.validation,
  mode: state.personalForm.view.mode,
  dialog: state.personalForm.dialog.data,
  isLoading:
    state.personalForm.positions.isLoading ||
    state.personalForm.userNew.isLoading ||
    state.personalForm.userUpdate.isLoading ||
    state.personalForm.userImage.isLoading,
  userNew: state.personalForm.userNew.user
});

const mapDispatchToProps = dispatch => ({
  getPositions: () => dispatch(getPositions()),
  saveNewUser: arg => dispatch(saveNewUser(arg)),
  updateUser: (arg1, arg2) => dispatch(updateUser(arg1, arg2)),
  saveUserImage: (arg1, arg2) => dispatch(saveUserImage(arg1, arg2)),
  setFields: arg => dispatch(setFields(arg)),
  setViewMode: arg => dispatch(setViewMode(arg)),
  setDialog: arg => dispatch(setDialog(arg)),
  inputForm: arg => dispatch(inputForm(arg)),
  validateForm: arg => dispatch(validateForm(arg)),
  clearError: arg => dispatch(clearError(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withData(labels)(PersonalForm));
