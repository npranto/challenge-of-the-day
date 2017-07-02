
// Specs for longestWord.js

import {assert} from 'chai';
import longestWord from './longestWord.js';

describe('longestWord()', () => {
	it('should return \'fun&!! time\' when passed \'time\'', () => {
		assert.equal(longestWord('fun&!! time'), 'time');
	})
	it('should return \'I love dogs\' when passed \'love\'', () => {
		assert.equal(longestWord('I love dogs'), 'love');
	})
})

