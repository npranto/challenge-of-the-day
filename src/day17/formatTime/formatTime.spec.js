import assert from 'assert';
import formatTime from './formatTime';

describe('formatTime()', () => {
  it("9 should equal '09'", () => {
    assert.equal(formatTime(9), '09');
  });
  it("0 should equal '00'", () => {
    assert.equal(formatTime(0), '00');
  });
  it("10 should equal '10'", () => {
    assert.equal(formatTime(10), '10');
  });
  it("32 should equal '32'", () => {
    assert.equal(formatTime(32), '32');
  });
});
