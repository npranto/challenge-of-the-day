import primeTime from '../primeTime/primeTime';

const primeMover = (nthPrime) => {
  let currentNumber = 2;
  let currPrimeRank = 1;
  while (currPrimeRank !== nthPrime) {
    currentNumber += 1;
    if (primeTime(currentNumber)) {
      currPrimeRank += 1;
    }
  }
  return currentNumber;
};

export default primeMover;
