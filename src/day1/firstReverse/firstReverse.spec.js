// Specs for firstReverse.js

import {assert} from 'chai';

import firstReverse from './firstReverse.js';

describe('firstReverse()', () => {
	it('should return \'bikahs\' when passed \'shakib\'', () => {
		assert.equal(firstReverse('shakib'), 'bikahs');
	})
	it('should return \'\' when passed \'\'', () => {
		assert.equal(firstReverse(''), '');
	})
	it('should return \'a\' when passed \'a\'', () => {
		assert.equal(firstReverse('a'), 'a');
	})
	it('should return \'?uoy era woh ,olleh\' when passed \'hello, how are you?\'', function() {
		assert.equal(firstReverse('hello, how are you?'), '?uoy era woh ,olleh');
	})
	describe('Different argument type cases', () => {
		it('should return \'undefined\' when passed 5', () => {
			assert.equal(firstReverse(5), undefined);
		})
		it('should return undefined when passed true', () => {
			assert.equal(firstReverse(true), undefined);
		})
	})	
})

