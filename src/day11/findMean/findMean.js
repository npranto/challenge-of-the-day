const findMean = (arrOfNumbers) => {
  const sum = arrOfNumbers.reduce((curr, next) => curr + next);
  return sum / arrOfNumbers.length;
};

export default findMean;
