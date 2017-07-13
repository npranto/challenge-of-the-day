import findMean from './../findMean/findMean.js';
import findMode from './../findMode/findMode.js';

const meanMode = (arrOfNumbers) => {
    const mean = findMean(arrOfNumbers);
    const mode = findMode(arrOfNumbers);
    return (mean === mode) ? 1 : 0;
}

export default meanMode;