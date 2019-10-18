export default () => {
  const d = new Date();
  const formattedTime = {
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    hours: d.getHours(),
    minutes: d.getMinutes()
  };

  ['day', 'month', 'hours', 'minutes'].forEach(
    el =>
      (formattedTime[el] =
        formattedTime[el].toString().length === 1
          ? '0' + formattedTime[el]
          : formattedTime[el])
  );

  const { day, month, year, hours, minutes } = formattedTime;

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
