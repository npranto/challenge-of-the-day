import { assert } from 'chai';

import largestPrimeFactor from './largestPrimeFactor';

describe('largestPrimeFactor()', () => {
  it('should return 29 when passed 13195', () => {
    assert.equal(largestPrimeFactor(13195), 29);
  })
});
