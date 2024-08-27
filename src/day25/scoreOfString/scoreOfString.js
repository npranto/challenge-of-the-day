/* eslint-disable no-plusplus */
/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
  const chars = s.split('');
  let score = 0;
  for (let i = 0; i < chars.length - 1; i++) {
    const currCharCode = chars[i].charCodeAt(0);
    const nextCharCode = chars[i+1].charCodeAt(0);
    const diff = Math.abs(currCharCode - nextCharCode);
    score += diff;
  }
  return score;
};

export default scoreOfString;