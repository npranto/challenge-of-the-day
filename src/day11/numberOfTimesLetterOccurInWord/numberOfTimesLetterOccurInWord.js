/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const numberOfTimesLetterOccurInWord = (letter, arr) => {
  let totalOccurs = 0;
  arr.forEach((curr, index, arr) => {
    if (curr === letter) {
      totalOccurs += 1;
    }
  });
  return totalOccurs;
};

export default numberOfTimesLetterOccurInWord;
