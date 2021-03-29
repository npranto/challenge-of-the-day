/* eslint-disable operator-linebreak */
const removeDuplicates = (arr) => [...new Set(arr)];
const sortAscending = (arr) => arr.sort((curr, next) => curr - next);

const secondGreatLow = (arrOfNumbers) =>
  removeDuplicates(sortAscending(arrOfNumbers)).slice(-3, -1).join(', ');

export default secondGreatLow;
