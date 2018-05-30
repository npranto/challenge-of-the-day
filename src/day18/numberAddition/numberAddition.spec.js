import { assert } from 'chai';
import numberAddition from './numberAddition';

describe(`numberAddition()`, function() {
	it(`should return 91 when passed "88Hello 3World!"`, function() {
		assert.equal(numberAddition("88Hello 3World!"), 91);
	})
	it(`should return 55 when passed "55Hello"`, function() {
		assert.equal(numberAddition("55Hello"), 55);
	})
	it(`should return 10 when passed "5Hello 5"`, function() {
		assert.equal(numberAddition("5Hello 5"), 10);
	})
})