
// Specs for trimPunctuationsFromBothEnd.js

import {assert} from 'chai';
import trimPunctuationsFromBothEnd from './trimPunctuationsFromBothEnd.js';

describe('trimPunctuationsFromBothEnd()', () => {
	it('should return "All" when passed "All"', () => {
		assert.equal(trimPunctuationsFromBothEnd("All"), "All");
	})
	it('should return "All" when passed "All,"', () => {
		assert.equal(trimPunctuationsFromBothEnd("All,"), "All");
	})
	it('should return "All" when passed "!All"', () => {
		assert.equal(trimPunctuationsFromBothEnd("!All"), "All");
	})
	it('should return "All" when passed ",All!"', () => {
		assert.equal(trimPunctuationsFromBothEnd(",All!"), "All");
	})
})



