import { assert } from 'chai';

import isOdd from './isOdd';

describe('isOdd()', () => {
  it('should return true when passed 1', () => {
    assert.equal(isOdd(1), true);
  });
  it('should return true when passed 9', () => {
    assert.equal(isOdd(9), true);
  });
  it('should return false when passed 4', () => {
    assert.equal(isOdd(4), false);
  });
});
