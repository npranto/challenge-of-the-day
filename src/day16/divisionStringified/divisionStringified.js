const divisionStringified = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('parameters must be type number');
    }

    const originalResult = num1 / num2;
    const rounded = (originalResult - Math.floor(originalResult) < 0.5)
        ? Math.floor(originalResult)
        : Math.ceil(originalResult)

    const roundedStringified = rounded.toString();

    return roundedStringified
        .split('')
        .reverse()
        .reduce((accum, char) => {
            if (accum.tracker === 3) {
                accum.resultWithComma.push(',');
                accum.tracker = 0;

            }
            accum.resultWithComma.push(char);
            accum.tracker += 1;
            return accum;
        }, {
            tracker: 0,
            resultWithComma: []
        })
        .resultWithComma
        .reverse()
        .join('');
};

export default divisionStringified;