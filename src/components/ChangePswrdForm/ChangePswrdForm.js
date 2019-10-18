import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import FormMsg from '../FormMsg';
import CloseButton from '../CloseButton';
import { labels, placeholders } from './labels';
import {
  inputForm,
  validateForm,
  clearError,
  updatePassword
} from '../../modules/ChangePswrdForm';
import styles from '../Profile/Profile.module.css';
import formStyles from '../LoginForm/LoginForm.module.css';

class ChangePswrdForm extends PureComponent {
  constructor(props) {
    super(props);
    this.activeInput = React.createRef();
  }

  componentDidMount() {
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

    const {
      user,
      fields,
      updatePassword,
      validateForm,
      hidePswrdBlock
    } = this.props;

    await validateForm(fields);

    const { validation } = this.props;

    if (validation.status) {
      await updatePassword(user.id, {
        oldPassword: fields.oldPassword,
        password: fields.newPassword
      });

      hidePswrdBlock();
    } else {
      this.activeInput.current.focus();
    }
  };

  render() {
    const { fields, validation, hidePswrdBlock } = this.props;
    const { msg, error, errorInputs } = validation;

    return (
      <form
        action="/"
        className={styles.formChangePswrd}
        onSubmit={this.onSubmit}
      >
        <div className={styles.closeButtonBlock}>
          <CloseButton onClick={hidePswrdBlock} size="m" />
        </div>
        <div className={styles.infoBlock}>
          {Object.keys(labels).map((field, i) => (
            <div className={formStyles.formItem} key={field}>
              <Input
                type="password"
                ref={
                  errorInputs.length
                    ? field === errorInputs[0]
                      ? this.activeInput
                      : null
                    : i === 0
                    ? this.activeInput
                    : null
                }
                errorClass={errorInputs.includes(field) ? error : null}
                name={field}
                value={fields[field]}
                placeholder={placeholders[field]}
                onChange={this.onInputChange}
              />
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
          <Button type="submit" name="submit" children="Изменить" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  fields: state.changePswrdForm.datalist.fields,
  validation: state.changePswrdForm.datalist.validation,
  passwordUpdate: {
    user: state.changePswrdForm.passwordUpdate.user,
    isLoading: state.changePswrdForm.passwordUpdate.isLoading,
    error: state.changePswrdForm.passwordUpdate.error
  }
});

const mapDispatchToProps = dispatch => ({
  updatePassword: (arg1, arg2) => dispatch(updatePassword(arg1, arg2)),
  inputForm: arg => dispatch(inputForm(arg)),
  validateForm: arg => dispatch(validateForm(arg)),
  clearError: arg => dispatch(clearError(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePswrdForm);
