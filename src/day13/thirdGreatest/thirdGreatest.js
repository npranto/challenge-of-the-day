const thirdGreatest = (strArr, nthGreatest) =>
  strArr.sort((curr, next) => curr.length - next.length)[nthGreatest - 1];

export default thirdGreatest;
