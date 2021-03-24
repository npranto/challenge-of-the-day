import { assert } from 'chai';

import arithGeo from './arithGeo';

describe('arithGeo()', () => {
  it('should return "Arithmetic" when passed [2, 4, 6, 8]', () => {
    assert.equal(arithGeo([2, 4, 6, 8]), 'Arithmetic');
  });
  it('should return "Geometric" when passed [2, 6, 18, 54]', () => {
    assert.equal(arithGeo([2, 6, 18, 54]), 'Geometric');
  });
  it('should return -1 when passed [2, 8, 28, 3]', () => {
    assert.equal(arithGeo([2, 8, 28, 3]), -1);
  });
});
