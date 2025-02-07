const isPositive = (num) => num * -1 <= 0;

const firstFactorial = (num) => {
  if (Number.isInteger(num) && isPositive(num)) {
    if (num === 0) {
      return 1;
    }
    if (num === 1) {
      return num;
    }
    return num * firstFactorial(num - 1);
  }
  return null;
};

export default firstFactorial;
