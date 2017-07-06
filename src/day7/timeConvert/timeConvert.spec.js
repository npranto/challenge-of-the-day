
// Specs for timeConvert.js

import {assert} from 'chai';
import timeConvert from './timeConvert.js';

describe('timeConvert()', () => {
	it('should return "2:06" when passed 126', () => {
		assert.equal(timeConvert(126), "02:06");
	})
	it('should return "0.45" when passed 45', () => {
		assert.equal(timeConvert(45), "00:45");
	})
})

