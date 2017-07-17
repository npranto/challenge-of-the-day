const thirdGreatest = (strArr, nthGreatest) => {
    return strArr.sort((curr, next) => {
        return curr.length < next.length
    })[nthGreatest-1];
}

export default thirdGreatest;