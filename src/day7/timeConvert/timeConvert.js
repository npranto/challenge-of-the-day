const timeConvert = (timeInMinutes) => {
  return `${formatSingleDigit(Math.floor(timeInMinutes/60))}:${formatSingleDigit(timeInMinutes%60)}`
}

const formatSingleDigit = (num) => {
  return (num < 10) ? `0${num}` : num;
}

export default timeConvert;

