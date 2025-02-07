const numberAddition = (str) => {
  const numberMatches = str.match(/-?\d+(\.\d+)?/g);
  console.log(">>>>", numberMatches);
  return numberMatches
    ? numberMatches.reduce(
        (sum, numberMatch) => (sum += Number(numberMatch)),
        0,
      )
    : 0;
};

export default numberAddition;
