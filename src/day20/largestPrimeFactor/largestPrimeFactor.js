import isFactor from './../isFactor/isFactor';
import isPrime from './../isPrime/isPrime';

const largestPrimeFactor = (value) => {
  let possibleFactor = Math.floor(value / 2);
  while (possibleFactor > 1) {
    if (isFactor(possibleFactor, value) && isPrime(possibleFactor)) {
      return possibleFactor;
    }
    possibleFactor -= 1;
  }
  return possibleFactor;
};

export default largestPrimeFactor;
