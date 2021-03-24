import isLetter from '../isLetter/isLetter';

const simpleSymbols = (str) => {
  const valueWithNoSymbolBeforeIt = str
    .split('')
    .find(
      (elem, index, array) =>
        isLetter(elem) && (index === 0 || array[index - 1] !== '+'),
    );
  return valueWithNoSymbolBeforeIt ? 'false' : 'true';
};

export default simpleSymbols;
