/* eslint-disable no-nested-ternary */
import isLetter from '../../day6/isLetter/isLetter';

const swapCase = (str) =>
  str
    .split('')
    .map((char) =>
      (isLetter(char)
        ? char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
        : char))
    .join('');

export default swapCase;
