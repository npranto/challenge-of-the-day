/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
const numberAddition = (str) => {
  const numberMatches = str.match(/\d+/g);
  return numberMatches
    ? numberMatches.reduce(
      (sum, numberMatch) => (sum += parseInt(numberMatch)),
      0,
    )
    : 0;
};

export default numberAddition;
