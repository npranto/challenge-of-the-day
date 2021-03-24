import { assert } from 'chai';

import isFactor from './isFactor';

describe('isFactor()', () => {
  it('should return true when passed 3 and 12', () => {
    assert.equal(isFactor(3, 12), true);
  });
  it('should return false when passed 3 and 13', () => {
    assert.equal(isFactor(3, 13), false);
  });
});
