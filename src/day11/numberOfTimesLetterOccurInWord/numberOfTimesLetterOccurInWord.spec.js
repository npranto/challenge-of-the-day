// Specs for numberOfTimesLetterOccurInWord.js

import {assert} from 'chai';

import numberOfTimesLetterOccurInWord from './numberOfTimesLetterOccurInWord.js';

describe('numberOfTimesLetterOccurInWord()', () => {
	it('should return 2 when passed ("l", ["h","e","l","l","o"])', () => {
		assert.equal(numberOfTimesLetterOccurInWord("l", ["h","e","l","l","o"]), 2 );
	})
	it('should return 1 when passed ("a", ["w","h","a","t"])', () => {
		assert.equal(numberOfTimesLetterOccurInWord("a", ["w","h","a","t"]), 1);
	})
	it('should return 0 when passed ("b", ["w","h","a","t"])', () => {
		assert.equal(numberOfTimesLetterOccurInWord("b", ["w","h","a","t"]), 0);
	})
})



