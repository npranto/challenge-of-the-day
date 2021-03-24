/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
const arithGeo = (arr) => {
  const DIFF = arr[1] - arr[0];
  const RATIO = arr[1] / arr[0];
  // check if arithmetic
  const isArithmetic = arr.filter(
    (curr, index, arr) => arr[index + 1] - curr !== DIFF,
  );
  // check if geometric
  const isGeometric = arr.filter(
    (curr, index, arr) => arr[index + 1] / curr !== RATIO,
  );
  return isArithmetic.length === 1
    ? 'Arithmetic'
    : isGeometric.length === 1
      ? 'Geometric'
      : -1;
};

export default arithGeo;
