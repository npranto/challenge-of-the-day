const formatSingleDigit = (num) => (num < 10 ? `0${num}` : num);

const timeConvert = (timeInMinutes) =>
  `${formatSingleDigit(Math.floor(timeInMinutes / 60))}:${formatSingleDigit(
    timeInMinutes % 60,
  )}`;

export default timeConvert;
