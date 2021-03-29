/* eslint-disable function-paren-newline */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-plusplus */
// largestPalindromeProduct
const largestPalindromeProduct = (numberOfDigits) => {
  // 1 => search from 1-9
  // 2 => search from 10-99
  // 3 => search from 100-999
  const getHighLimit = (numberOfDigits) => Math.pow(10, numberOfDigits) - 1;
  const isPalindrome = (str) =>
    str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

  const highLimit = getHighLimit(numberOfDigits);
  const allProducts = [];
  for (let i = highLimit; i >= 1; i--) {
    for (let j = highLimit; j >= 1; j--) {
      allProducts.push(i * j);
    }
  }

  const allPalindromeProducts = allProducts.filter((product) =>
    isPalindrome(`${product}`),
  );

  return Math.max(...allPalindromeProducts);
};

export default largestPalindromeProduct;
