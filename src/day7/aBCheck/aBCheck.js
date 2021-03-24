const aBCheck = (str) => {
  const noMatch = str.split('').every((curr, index, array) => {
    if (
      curr === 'a'
      && ((index + 4 < array.length && array[index + 4] === 'b')
        || (index - 4 >= 0 && array[index - 4] === 'b'))
    ) {
      return false;
    }
    return true;
  });
  return !noMatch;
};

export default aBCheck;
