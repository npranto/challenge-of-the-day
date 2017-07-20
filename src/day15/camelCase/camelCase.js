const camelCase = (phrase) => {
    return phrase
        .split(' ')
        .map((curr, index, arr) => {
            if(index === 0) {
                return curr[0].toLowerCase() + curr.slice(1);
            }else{
                return curr[0].toUpperCase() + curr.slice(1);
            }
        })
        .join('')
}

export default camelCase;