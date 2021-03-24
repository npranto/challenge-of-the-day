const checkNums = (num1, num2) =>
  // eslint-disable-next-line no-nested-ternary
  (num2 >= num1 ? (num1 === num2 ? '-1' : 'true') : 'false');

export default checkNums;
