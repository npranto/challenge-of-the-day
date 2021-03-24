/* eslint-disable radix */
/* eslint-disable no-plusplus */
const sumOfMultiplesOfThreeAndFive = (limit) => {
  const allMultiples = {};
  let counter = 1;

  while (counter < limit) {
    if (counter % 3 === 0 && !allMultiples[counter]) {
      allMultiples[counter] = true;
    }
    if (counter % 5 === 0 && !allMultiples[counter]) {
      allMultiples[counter] = true;
    }
    counter++;
  }

  return Object.keys(allMultiples).reduce(
    (sum, eachMultiple) => sum + parseInt(eachMultiple),
    0,
  );
};

export default sumOfMultiplesOfThreeAndFive;
