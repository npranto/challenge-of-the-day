import assert from 'assert';
import removePunctuationFromWord from './removePunctuationFromWord';

describe(`removePunctuationFromWord()`, function() {
	it(`should return 'word' when input is 'word'`, function() {
		assert.equal(removePunctuationFromWord('word'), 'word');
	});
	it(`should return 'wow' when input is 'wow!'`, function() {
		assert.equal(removePunctuationFromWord('wow!'), 'wow');
	});
	it(`should return 'Hello Kevin' when input is 'Hello, Kevin!'`, function() {
		assert.equal(removePunctuationFromWord('Hello, Kevin!'), 'Hello Kevin');
	});
	it(`should return 'false' when input is false`, function() {
		assert.equal(removePunctuationFromWord(false), 'false');
	});
	it(`should return 'what are you talking about bro' when input is 'what are you talking about, bro?'`, function() {
		assert.equal(removePunctuationFromWord('what are you talking about, bro?'), 'what are you talking about bro');
	});
});