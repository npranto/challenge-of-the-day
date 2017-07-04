
// Specs for letterCapitalize.js

import {assert} from 'chai';
import letterCapitalize from './letterCapitalize.js';

describe('letterCapitalize()', () => {
	it('should return "Hello World" when passed "hello world"', () => {
		assert.equal(letterCapitalize("hello world"), "Hello World");
	})
	it('should return "I Ran There" when passed "i ran there"', () => {
		assert.equal(letterCapitalize("i ran there"), "I Ran There");
	})	
})