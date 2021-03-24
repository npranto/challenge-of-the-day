import assert from 'assert';
import removePunctuationFromWord from './removePunctuationFromWord';

describe('removePunctuationFromWord()', () => {
  it("should return 'word' when input is 'word'", () => {
    assert.equal(removePunctuationFromWord('word'), 'word');
  });
  it("should return 'wow' when input is 'wow!'", () => {
    assert.equal(removePunctuationFromWord('wow!'), 'wow');
  });
  it("should return 'Hello Kevin' when input is 'Hello, Kevin!'", () => {
    assert.equal(removePunctuationFromWord('Hello, Kevin!'), 'Hello Kevin');
  });
  it("should return 'false' when input is false", () => {
    assert.equal(removePunctuationFromWord(false), 'false');
  });
  it("should return 'what are you talking about bro' when input is 'what are you talking about, bro?'", () => {
    assert.equal(
      removePunctuationFromWord('what are you talking about, bro?'),
      'what are you talking about bro',
    );
  });
});
