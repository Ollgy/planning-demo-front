export default ({ day, month, year }) => {
  day = day.toString().length === 1 ? '0' + day : day;
  month = month.toString().length === 1 ? '0' + month : month;

  return `${day}.${month}.${year}`;
};
