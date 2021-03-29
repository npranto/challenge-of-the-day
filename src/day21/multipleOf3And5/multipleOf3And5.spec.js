import { assert } from 'chai';

import multipleOf3And5 from './multipleOf3And5';

describe('multipleOf3And5()', () => {
  it('should return 23 when passed 10', () => {
    assert.equal(multipleOf3And5(10), 23);
  });
  it('should return 543 when passed 49', () => {
    assert.equal(multipleOf3And5(49), 543);
  });
  it('should return 233168 when passed 1000', () => {
    assert.equal(multipleOf3And5(1000), 233168);
  });
  it('should return 16687353 when passed 8456', () => {
    assert.equal(multipleOf3And5(8456), 16687353);
  });
  it('should return 89301183 when passed 19564', () => {
    assert.equal(multipleOf3And5(19564), 89301183);
  });
});
