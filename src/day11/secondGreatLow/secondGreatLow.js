const secondGreatLow = (arrOfNumbers) =>
  arrOfNumbers
    .sort((curr, next) => curr > next)
    .slice(-3, -1)
    .join(', ');

export default secondGreatLow;
