import assert from 'assert';
import formatTime from './formatTime';

describe(`formatTime()`, function() {
	it(`9 should equal '09'`, function() {
		assert.equal(formatTime(9), '09')
	})
	it(`0 should equal '00'`, function() {
		assert.equal(formatTime(0), '00')
	})
	it(`10 should equal '10'`, function() {
		assert.equal(formatTime(10), '10')
	})
	it(`32 should equal '32'`, function() {
		assert.equal(formatTime(32), '32')
	})
})