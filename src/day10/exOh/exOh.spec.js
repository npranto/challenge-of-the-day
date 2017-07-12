// Specs for exOh.js
import {assert} from 'chai';

import exOh from './exOh.js';

describe('exOh()', () => {
	it('should return false when passed "xooxxxxooxo"', () => {
		assert.equal(exOh("xooxxxxooxo"), false);
	})
	it('should return true when passed "xxoxxooo"', () => {
		assert.equal(exOh("xxoxxooo"), true);
	})
})



