/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
const getNextLetter = (curr) => {
  if (typeof curr === 'string' && curr.toLowerCase() !== curr.toUpperCase()) {
    return String.fromCharCode(curr.charCodeAt(0) + 1);
  }
  return curr;
};

const isVowel = (char) => /[aeiou]/.test(char);

const letterChanges = (str) =>
  str
    .split('')
    .map((curr) => {
      let nextLetter = getNextLetter(curr);
      isVowel(nextLetter) ? (nextLetter = nextLetter.toUpperCase()) : null;
      curr = nextLetter;
      return curr;
    })
    .join('');

export default letterChanges;
