/* eslint-disable no-unused-vars */
import isVowel from '../isVowel/isVowel';

const vowelCount = (str) =>
  str.split('').filter((curr, index, array) => isVowel(curr)).length;

export default vowelCount;
