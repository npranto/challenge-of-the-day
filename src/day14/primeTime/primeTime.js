const primeTime = (num) => {
    if(num === 0 || num === 1){
        return false;
    }
    return recursivePrimeIterator(num, Math.round(num/2));
}

const recursivePrimeIterator = (num, numFactorCandidate) => {
    if(numFactorCandidate === 1){
        return true;
    }
    if(num%numFactorCandidate === 0){
        return false;
    }
    return recursivePrimeIterator(num, numFactorCandidate-1);
}

export default primeTime;