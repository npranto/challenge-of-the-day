import isOdd from './../isOdd/isOdd.js';

const dashInsert = (num) => {
    const numToString = num.toString();
    const numStringToArray = numToString.split('');
    let copyOfNumStringToArray = numStringToArray.slice();

    let indexIncrementer = 1;

    copyOfNumStringToArray.forEach((curr, index, arr) => {
        if(index < arr.length-1){
            if((isOdd(curr) && isOdd(arr[index+1]))){
                numStringToArray.splice(index+indexIncrementer, 0, '-');
                indexIncrementer++;
            }
        }
    })

    return numStringToArray.join('');
}

export default dashInsert;