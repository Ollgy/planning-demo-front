export default ({ fields, positions: posData }) => {
  const values = Object.keys(fields)
    .filter(value => value !== 'image')
    .map(key => fields[key]);
  const positions = posData.map(positions => positions.name);

  if (values.includes('')) {
    return {
      status: false,
      error: 'empty',
      errorInputs: Object.keys(fields).filter(key => !fields[key]),
      msg: 'Необходимо заполнить все поля'
    };
  } else if (!positions.includes(fields.position)) {
    return {
      status: false,
      error: 'wrongPosition',
      errorInputs: ['position'],
      msg: 'Должность сотрудника необходимо выбрать из выпадающего списка'
    };
  } else if (
    !fields.email.match(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    )
  ) {
    return {
      status: false,
      error: 'wrongEmail',
      errorInputs: ['email'],
      msg: 'Введен недопустимый адрес электронной почты'
    };
  } else if (fields.phone.length !== 10 || fields.phone.match(/\D/)) {
    return {
      status: false,
      error: 'wrongPhone',
      errorInputs: ['phone'],
      msg:
        'Номер телефона должен содержать 10 знаков без пробелов и других соединительых символов'
    };
  } else {
    return { status: true, error: '', errorInputs: [], msg: '' };
  }
};
