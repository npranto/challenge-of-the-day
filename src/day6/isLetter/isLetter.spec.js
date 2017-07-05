
// Specs for isLetter.js

import {assert} from 'chai';
import isLetter from './isLetter.js';

describe('isLetter()', () => {
	it('should return true when passed "a"', () => {
		assert.equal(isLetter("a"), true);
	})
	it('should return true when passed "F"', () => {
		assert.equal(isLetter("F"), true);
	})
	it('should return false when passed "+"', () => {
		assert.equal(isLetter("+"), false);
	})	
})

