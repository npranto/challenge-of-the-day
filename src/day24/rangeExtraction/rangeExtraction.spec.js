import { assert } from 'chai';

import rangeExtraction from './rangeExtraction';

describe('rangeExtraction()', () => {
  it('should return correct range extraction', () => {
    assert.equal(
      rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), 
      '-6,-3-1,3-5,7-11,14,15,17-20',
    );
  });
});
