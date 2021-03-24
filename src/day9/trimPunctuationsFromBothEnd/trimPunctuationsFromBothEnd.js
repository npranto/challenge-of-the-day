/* eslint-disable no-unused-vars */
import isLetter from '../../day6/isLetter/isLetter';

const trimPunctuationsFromBothEnd = (word) =>
  word
    .split('')
    .filter((curr, index, arr) => isLetter(curr))
    .join('');

export default trimPunctuationsFromBothEnd;
