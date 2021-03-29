/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
const largestPrimeFactor = (num) => {
  // find all factors of a number
  const findFactors = (num) => {
    const allFactors = [];

    for (let i = 1; i <= Math.ceil(num / 2); i++) {
      if (num % i === 0) {
        allFactors.push(i);
      }
    }

    if (allFactors.length === 1 && allFactors[0] === num) {
      return allFactors;
    }
    return [...allFactors, num];
  };

  // whether or not a number is prime
  const isPrime = (num) => {
    // whether or not given number is even
    const isEven = (n) => n % 2 === 0;

    // if num is less than 2, it is prime
    if (num <= 2) return true;

    // if num is even, it is NOT prime
    if (isEven(num)) return false;

    let i = 3;
    while (i < Math.ceil(num / 2)) {
      if (num % i === 0) return false;
      i += 2;
    }
    return true;
  };

  // find all the factors of num
  const factors = findFactors(num);
  // sort the factor from largest to smallest
  const sortFactors = factors.sort((a, b) => b - a);
  // find the first factor that is prime
  const largestPrime = sortFactors.find((factor) => isPrime(factor));

  return largestPrime;
};

export default largestPrimeFactor;
