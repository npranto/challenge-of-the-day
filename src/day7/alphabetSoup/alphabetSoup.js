const alphabetSoup = (str) =>
  str
    .split('')
    .sort((curr, next) => curr.charCodeAt(curr) - next.charCodeAt(next))
    .join('');

export default alphabetSoup;
