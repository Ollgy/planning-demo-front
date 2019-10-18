import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Input from '../Input';
import Button from '../Button';
import FormMsg from '../FormMsg';
import Checkbox from '../Checkbox';
import fieldsData from './fieldsData';
import { login } from '../../modules/Login';
import {
  inputForm,
  resetForm,
  validateForm,
  toggleChb,
  clearError,
  clearFields
} from '../../modules/LoginForm';
import { F } from '../../const';
import styles from './LoginForm.module.css';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.activeInput = React.createRef();
  }

  componentDidMount() {
    this.props.resetForm();
    this.activeInput.current.focus();
  }

  onInputChange = e => {
    const { inputForm, clearError } = this.props;

    inputForm({ input: e.target.name, value: e.target.value });
    clearError({ input: e.target.name });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { fields, validateForm, clearFields, login, user } = this.props;

    await validateForm({ fields, progress: 'prepare' });

    const { validation } = this.props;

    if (validation.status) {
      const { login: email, password, remembered } = fields;
      await login({ email, password, remembered });

      if (!user) {
        validateForm({ fields, progress: 'access_error' });
        clearFields({ login: email, password });
      } else {
        validateForm({ fields, progress: 'access_success' });
      }
    }

    if (this.activeInput.current) {
      this.activeInput.current.focus();
    }
  };

  render() {
    const { fields, resetForm, toggleChb } = this.props;
    const { error, msg, errorInputs } = this.props.validation;

    return (
      <div className={styles.formContainer}>
        <div className={styles.formWrap}>
          <form
            action="/"
            method="post"
            className={styles.form}
            onSubmit={this.onSubmit}
            onReset={resetForm}
          >
            {fieldsData.map((field, i) => (
              <div
                className={`${styles.formItem} ${styles.formItemWide}`}
                key={field.name}
              >
                <Input
                  type={field.type}
                  name={field.name}
                  ref={
                    errorInputs.length
                      ? field.name === errorInputs[0]
                        ? this.activeInput
                        : null
                      : i === 0
                      ? this.activeInput
                      : null
                  }
                  value={fields[field.name]}
                  placeholder=". . ."
                  errorClass={errorInputs.includes(field.name) ? error : null}
                  onChange={this.onInputChange}
                />
                <label className={styles.formLabel} htmlFor={field.name}>
                  <span>{field.label}</span>
                </label>
              </div>
            ))}
            <div className={`${styles.formItem}`} key={F.remembered}>
              <Checkbox
                type="checkbox"
                id={F.remembered}
                value={F.remembered}
                name={F.remembered}
                checked={fields.remembered}
                onChange={toggleChb}
              />
              <label className={styles.formLabel} htmlFor={F.remembered}>
                <span>Запомнить меня</span>
              </label>
            </div>
            <div className={styles.msgBlock}>
              <FormMsg children={msg} />
            </div>
            <div className={styles.buttonContainer}>
              <Button type="submit" name="submit" children="Войти" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fields: state.loginForm.fields,
  validation: state.loginForm.validation,
  user: state.login.user,
  isLoading: state.login.isLoading,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  login: arg => dispatch(login(arg)),
  validateForm: arg => dispatch(validateForm(arg)),
  inputForm: arg => dispatch(inputForm(arg)),
  resetForm: () => dispatch(resetForm()),
  toggleChb: () => dispatch(toggleChb()),
  clearError: arg => dispatch(clearError(arg)),
  clearFields: arg => dispatch(clearFields(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
