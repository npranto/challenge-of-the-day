// Specs for palindrome.js
import {assert} from 'chai';

import palindrome from './palindrome.js';

describe('palindrome()', () => {
	it('should return true when passed "racecar"', () => {
		assert.equal(palindrome("racecar"), true);
	})
	it('should return false when passed "noway"', () => {
		assert.equal(palindrome("noway"), false);
	})
	it('should return true when passed "nanan"', () => {
		assert.equal(palindrome("nanan"), true);
	})	
})



