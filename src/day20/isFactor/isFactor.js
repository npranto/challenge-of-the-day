const isFactor = (candidateFactor, factorOf) =>
  typeof candidateFactor === 'number'
  && typeof factorOf === 'number'
  && factorOf % candidateFactor === 0;

export default isFactor;
