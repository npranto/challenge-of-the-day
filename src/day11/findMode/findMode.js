const findMode = (arrOfNumbers) => {
    let mostOccuranceNumber = null;
    let mostOccurance = 0;
    arrOfNumbers.forEach((curr, index, arr) => {
        if(numberOfOccurances(curr, arr) > mostOccurance){
            mostOccurance = numberOfOccurances(curr, arr);
            mostOccuranceNumber = curr;
        }
    })
    return (mostOccuranceNumber === 1) ? null : mostOccuranceNumber;
}

const numberOfOccurances = (numberToMatch, arr) => {
    let totalOccurs = 0;
    arr.forEach((curr, index, arr) => {
        (curr === numberToMatch) ? (totalOccurs+=1) : null;
    })
    return totalOccurs;
}

export default findMode;