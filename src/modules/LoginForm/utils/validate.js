export default ({ fields, progress }) => {
  const values = Object.keys(fields).map(key => fields[key]);

  if (values.includes('')) {
    return {
      status: false,
      error: 'empty',
      errorInputs: Object.keys(fields).filter(key => fields[key] === ''),
      msg: 'Необходимо заполнить все поля'
    };
  } else if (progress === 'access_error') {
    return {
      status: false,
      error: 'access',
      errorInputs: ['login', 'password'],
      msg: 'Неверные логин или пароль'
    };
  } else {
    return { status: true, error: '', errorInputs: [], msg: '' };
  }
};
