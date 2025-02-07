const firstReverse = (str) => {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  }
  return null;
};

export default firstReverse;
