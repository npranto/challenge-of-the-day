const powersofTwo = (powerOfTwoCandidate) => {
    if (helperOfPowersofTwo(1, 0, powerOfTwoCandidate) === powerOfTwoCandidate) {
        return true;
    }
    return false;
}

const helperOfPowersofTwo = (currValue, currPower, powerOfTwoCandidate) => {
    if (currValue >= powerOfTwoCandidate) {
        return currValue;
    }else {
        currPower = currPower + 1;
        currValue = Math.pow(2, currPower);
        return helperOfPowersofTwo(currValue, currPower, powerOfTwoCandidate);
    }
}

export default powersofTwo;