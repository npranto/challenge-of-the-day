/* eslint-disable no-plusplus */
const isPrime = (value) => {
  let possiblePrimeValue = Math.floor(value / 2);
  while (possiblePrimeValue > 1) {
    if (value % possiblePrimeValue === 0) {
      return false;
    }
    possiblePrimeValue--;
  }
  return true;
};

export default isPrime;
