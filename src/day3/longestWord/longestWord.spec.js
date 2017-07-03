
// Specs for longestWord.js

import {assert} from 'chai';
import longestWord from './longestWord.js';

describe('longestWord()', () => {
	it('should return \'time\' when passed \'fun&!! time\'', () => {
		assert.equal(longestWord('fun&!! time'), 'time');
	})
	it('should return \'love\' when passed \'I love dogs\'', () => {
		assert.equal(longestWord('I love dogs'), 'love');
	})
})

