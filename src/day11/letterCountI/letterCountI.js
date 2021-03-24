/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import trimPunctuationsFromBothEnd from '../../day9/trimPunctuationsFromBothEnd/trimPunctuationsFromBothEnd';
import numberOfTimesLetterOccurInWord from '../numberOfTimesLetterOccurInWord/numberOfTimesLetterOccurInWord';

const letterCountI = (str) => {
  let mostOccuringLetterWord = '';
  let mostOccuringLetter = '';
  let mostnumberOfOccurs = 0;
  str
    .split(' ')
    .map((word, index, arr) => trimPunctuationsFromBothEnd(word))
    .forEach((word, index, arr) => {
      word.split('').forEach((letter, index, arr) => {
        if (numberOfTimesLetterOccurInWord(letter, arr) > mostnumberOfOccurs) {
          mostnumberOfOccurs = numberOfTimesLetterOccurInWord(letter, arr);
          mostOccuringLetter = letter;
          mostOccuringLetterWord = word;
        }
      });
    });

  return `"${mostOccuringLetterWord}" contains '${mostOccuringLetter}' (${mostnumberOfOccurs}) times`;
};

export default letterCountI;
