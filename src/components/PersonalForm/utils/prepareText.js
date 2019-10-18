export default (field, text) =>
  field === 'phone'
    ? '+7' + text.split('\n').join('<br>')
    : text.split('\n').join('<br>');
