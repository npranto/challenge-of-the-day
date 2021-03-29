import { assert } from 'chai';

import sumSquareDifference from './sumSquareDifference';

describe('sumSquareDifference()', () => {
  it('should return 2640 when passed 10', () => {
    assert.equal(sumSquareDifference(10), 2640);
  });
  it('should return 41230 when passed 20', () => {
    assert.equal(sumSquareDifference(20), 41230);
  });
});
