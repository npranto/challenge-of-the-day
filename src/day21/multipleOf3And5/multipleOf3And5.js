/* eslint-disable no-plusplus */
const multipleOf3And5 = (num) => {
  const LIMIT = num;
  const multiples = [];

  // collect all the multiples of 3 and 5 inside `multiples` array
  for (let i = 1; i < LIMIT; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  // sum of all the multiples
  const sum = multiples.reduce((total, multiple) => total + multiple, 0);

  return sum;
};

export default multipleOf3And5;
