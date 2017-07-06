
// Specs for isLetter.js

import {assert} from 'chai';
import checkNums from './checkNums.js';

describe('checkNums()', () => {
	it('should return "true" when passed (3, 122)', () => {
		assert.equal(checkNums(3, 122), "true");
	})
	it('should return "-1" when passed (10, 10)', () => {
		assert.equal(checkNums(10, 10), "-1");
	})
	it('should return "false" when passed (15, 7)', () => {
		assert.equal(checkNums(15, 7), "false");
	})
})


