import { assert } from 'chai';
import sumOfMultiplesOfThreeAndFive from './multiplesOfThreeAndFive';

describe('sumOfMultiplesOfThreeAndFive()', () => {
  it('should return 23 when passed 10', () => {
    assert.equal(sumOfMultiplesOfThreeAndFive(10), 23);
  });
  it('should return 233168 when passed 1000', () => {
    assert.equal(sumOfMultiplesOfThreeAndFive(1000), 233168);
  });
});
