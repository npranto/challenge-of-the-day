const isFactor = (candidateFactor, factorOf) => {
  return (typeof candidateFactor === 'number') && (typeof factorOf === 'number') && (factorOf % candidateFactor === 0);
}

export default isFactor;
