const findMean = (arrOfNumbers) => {
    const sum = arrOfNumbers.reduce((curr, next) => {
        return curr + next;
    });
    return sum/arrOfNumbers.length;
}

export default findMean;