const alphabetSoup = (str) =>
  str
    .split('')
    .sort((curr, next) => curr.charCodeAt(0) > next.charCodeAt(0))
    .join('');

export default alphabetSoup;
