import primeTime from './../primeTime/primeTime.js';

const primeMover = (nthPrime) => {
    let currentNumber = 2;
    let currPrimeRank = 1;
    while(currPrimeRank !== nthPrime){
        currentNumber = currentNumber + 1;
        if(primeTime(currentNumber)){
            currPrimeRank = currPrimeRank + 1;
        }
    }
    return currentNumber;
}

export default primeMover;