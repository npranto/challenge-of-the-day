/* eslint-disable no-unused-expressions */
const exOh = (str) => {
  let toggler = 0;
  str.split('').forEach((curr) => {
    curr === 'x' ? (toggler += 1) : (toggler -= 1); // assumes there are only x's and o's in str
  });
  return toggler === 0;
};

export default exOh;
