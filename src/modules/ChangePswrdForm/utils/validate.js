export default fields => {
  const values = Object.keys(fields).map(key => fields[key]);

  if (values.includes('')) {
    return {
      status: false,
      error: 'empty',
      errorInputs: Object.keys(fields).filter(key => !fields[key]),
      msg: 'Необходимо заполнить все поля'
    };
  } else if (fields.newPassword !== fields.rptPassword) {
    return {
      status: false,
      error: 'dif',
      errorInputs: ['newPassword', 'rptPassword'],
      msg:
        'Поле "Повторите новый пароль" должно дублировать поле "Новый пароль"'
    };
  } else if (values.find(value => value.match(/\W/))) {
    return {
      status: false,
      error: 'badSymbols',
      errorInputs: [],
      msg: 'Пароль может содержать только буквенные символы, числа и символ "_"'
    };
  } else {
    return {
      status: true,
      error: '',
      errorInputs: [],
      msg: 'Валидация прошла успешно!'
    };
  }
};
