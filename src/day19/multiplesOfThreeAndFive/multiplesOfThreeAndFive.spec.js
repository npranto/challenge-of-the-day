import { assert } from 'chai';
import sumOfMultiplesOfThreeAndFive from './multiplesOfThreeAndFive';

describe(`sumOfMultiplesOfThreeAndFive()`, function() {
	it(`should return 23 when passed 10`, function() {
    assert.equal(sumOfMultiplesOfThreeAndFive(10), 23);
  })
  it(`should return 233168 when passed 1000`, function() {
    assert.equal(sumOfMultiplesOfThreeAndFive(1000), 233168);
	})
});

