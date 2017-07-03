
// Specs for letterChanges.js

import {assert} from 'chai';
import letterChanges from './letterChanges.js';

describe('letterChanges()', () => {
	it('should return \'Ifmmp*3\' when passed \'hello*3\'', () => {
		assert.equal(letterChanges('hello*3'), 'Ifmmp*3');
	})
	it('should return \'gvO Ujnft!\' when passed \'fun times!\'', () => {
		assert.equal(letterChanges('fun times!'), 'gvO Ujnft!');
	})	
})

