const camelCase = (phrase) =>
  phrase
    .split(' ')
    .map((curr, index) => {
      if (index === 0) {
        return curr[0].toLowerCase() + curr.slice(1);
      }
      return curr[0].toUpperCase() + curr.slice(1);
    })
    .join('');

export default camelCase;
