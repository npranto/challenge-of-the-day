const evenFibonacci = (limit = 4000000) => {
  const allFibs = [1, 2];

  // whether or not given number is even
  const isEven = (num) => num % 2 === 0;

  // collect all fibs from 1 to provided limit within `allFibs` array
  while (allFibs[allFibs.length - 1] <= limit) {
    allFibs.push(allFibs[allFibs.length - 1] + allFibs[allFibs.length - 2]);
  }

  // filter all the even fibs
  const evenFibs = allFibs.filter((fib) => isEven(fib));

  // finds sum of all even fibs
  const sumOfEvenFibs = evenFibs.reduce((total, fib) => total + fib, 0);

  return sumOfEvenFibs;
};

export default evenFibonacci;
