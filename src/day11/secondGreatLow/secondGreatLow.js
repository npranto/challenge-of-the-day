const secondGreatLow = (arrOfNumbers) => {
    return arrOfNumbers
        .sort((curr, next) => {
            return curr > next;
        })
        .slice(-3, -1)
        .join(', ');
}

export default secondGreatLow;
