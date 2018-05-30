const numberAddition = (str) => {
  const numberMatches = str.match(/\d+/g);
  return ((numberMatches) 
    ? numberMatches.reduce((sum, numberMatch) => {
      return sum += parseInt(numberMatch);
    }, 0)
    : 0
  )
};

export default numberAddition;