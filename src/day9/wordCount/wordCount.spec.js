
// Specs for wordCount.js

import {assert} from 'chai';
import wordCount from './wordCount.js';

describe('wordCount()', () => {
	it('should return 4 when passed "All cows eat grass"', () => {
		assert.equal(wordCount("All cows eat grass"), 4);
	})
	it('should return 10 when passed "lane   cborrowed, why of sd f  dfgdfg gdfggd gh blue"', () => {
		assert.equal(wordCount("lane   cborrowed, why of sd f  dfgdfg gdfggd gh blue"), 10);
	})
})



