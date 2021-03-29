import { assert } from 'chai';

import largestPrimeFactor from './largestPrimeFactor';

describe('largestPrimeFactor()', () => {
  it('should return 2 when passed 2', () => {
    assert.equal(largestPrimeFactor(2), 2);
  });
  it('should return 3 when passed 3', () => {
    assert.equal(largestPrimeFactor(3), 3);
  });
  it('should return 5 when passed 5', () => {
    assert.equal(largestPrimeFactor(5), 5);
  });
  it('should return 7 when passed 7', () => {
    assert.equal(largestPrimeFactor(7), 7);
  });
  it('should return 29 when passed 13195', () => {
    assert.equal(largestPrimeFactor(13195), 29);
  });
});
