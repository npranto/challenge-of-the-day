
// Specs for aBCheck.js

import {assert} from 'chai';
import aBCheck from './aBCheck.js';

describe('aBCheck()', () => {
	it('should return true when passed "lane borrowed"', () => {
		assert.equal(aBCheck("lane borrowed"), true);
	})
	it('should return false when passed "lane cborrowed"', () => {
		assert.equal(aBCheck("lane cborrowed"), false);
	})	
})

