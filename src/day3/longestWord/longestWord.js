/* eslint-disable no-useless-escape */
const longestWord = (str) =>
  str
    .split(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]+/g)
    .sort((a, b) => b.length > a.length)
    .shift();

export default longestWord;
