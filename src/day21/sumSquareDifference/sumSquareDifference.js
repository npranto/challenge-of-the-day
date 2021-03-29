/* eslint-disable no-shadow */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-plusplus */
// sumSquareDifference
const sumSquareDifference = (num) => {
  const naturalNumbers = [];

  // create a list of all natural numbers
  for (let i = 1; i <= num; i++) {
    naturalNumbers.push(i);
  } // i.e., [1,2,3,4,5]

  // CASE 1: calculate sum of sum of squares
  const sumOfSquaresTotal = naturalNumbers.reduce(
    (total, num) => total + Math.pow(num, 2),
    0,
  );

  // CASE 2: calculate sum of square of sum
  const squareOfSumTotal = Math.pow(
    naturalNumbers.reduce((total, num) => total + num, 0),
    2,
  );

  // diff between CASE 1 and 2
  return squareOfSumTotal - sumOfSquaresTotal;
};

export default sumSquareDifference;
