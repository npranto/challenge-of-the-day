import isLetter from './../isLetter/isLetter.js';

const simpleSymbols = (str) => {
  let valueWithNoSymbolBeforeIt = str.split('').find((elem, index, array) => {
    return ((isLetter(elem)) && ((index === 0) || (array[index-1] !== '+')))
  });
  return valueWithNoSymbolBeforeIt ? "false" : "true";
}

export default simpleSymbols;