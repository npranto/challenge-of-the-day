/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
import trimPunctuationsFromBothEnd from '../trimPunctuationsFromBothEnd/trimPunctuationsFromBothEnd';

const wordCount = (str) =>
  str
    .split(' ')
    .filter((curr, index, arr) =>
      /^[a-zA-Z]+$/.test(trimPunctuationsFromBothEnd(curr)),
    ).length;

export default wordCount;
