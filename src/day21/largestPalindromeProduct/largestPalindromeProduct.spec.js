import { assert } from 'chai';

import largestPalindromeProduct from './largestPalindromeProduct';

describe('largestPalindromeProduct()', () => {
  it('should return 9009 when passed 2', () => {
    assert.equal(largestPalindromeProduct(2), 9009);
  });
  it('should return 906609 when passed 3', () => {
    assert.equal(largestPalindromeProduct(3), 906609);
  });
});
