import isEven from './../../day12/isEven/isEven';

const evenFibonacciNumbers = (firstTerm = 1, secondTerm = 2, evenFibs = []) => {
  const LIMIT = 4000000;
  // find fib num => add firstTerm and secondTerm
  let newFib = firstTerm + secondTerm;
  // if fib sum is less than limit
  if (newFib < LIMIT) {
    // if is even
    if (isEven(newFib)) {
      // add it to sum list
      evenFibs.push(newFib);
    }
    // return recursively run evenFibonacciNumbers(secondTerm, new fib sum, evenFibs)
    return evenFibonacciNumbers(secondTerm, newFib, evenFibs);
  }
  // return sum of all numbers in evenFibs
  return evenFibs.reduce((sum, eachFib) => {
    return sum + eachFib;
  }, 0);
};

export default evenFibonacciNumbers;
