const removePunctuationFromWord = (word) => {
  const regexForLettersNumbersAndSpacesOnly = /^[0-9a-zA-Z\s]*$/;
  const chars = word.toString().split('');
  return chars
    .filter((char) => regexForLettersNumbersAndSpacesOnly.test(char))
    .join('');
};

export default removePunctuationFromWord;
