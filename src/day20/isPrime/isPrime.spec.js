import { assert } from 'chai';

import isPrime from './isPrime';

describe('isPrime()', () => {
  it('should return true when passed 5', () => {
    assert.equal(isPrime(5), true);
  });
  it('should return true when passed 13', () => {
    assert.equal(isPrime(13), true);
  });
  it('should return false when passed 28', () => {
    assert.equal(isPrime(28), false);
  });
});
