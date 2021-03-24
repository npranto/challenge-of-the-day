/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
const helperOfPowersofTwo = (currValue, currPower, powerOfTwoCandidate) => {
  if (currValue >= powerOfTwoCandidate) {
    return currValue;
  }
  currPower += 1;
  currValue = Math.pow(2, currPower);
  return helperOfPowersofTwo(currValue, currPower, powerOfTwoCandidate);
};

const powersofTwo = (powerOfTwoCandidate) => {
  if (helperOfPowersofTwo(1, 0, powerOfTwoCandidate) === powerOfTwoCandidate) {
    return true;
  }
  return false;
};

export default powersofTwo;
