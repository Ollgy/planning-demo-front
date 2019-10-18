export default fields => {
  if (!fields.task) {
    return {
      status: false,
      error: 'empty',
      errorInputs: ['task'],
      msg: 'Необходимо ввести формулировку задачи'
    };
  } else {
    return { status: true, error: '', errorInputs: [], msg: '' };
  }
};
