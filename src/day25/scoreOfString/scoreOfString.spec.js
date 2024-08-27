import { assert } from 'chai';

import scoreOfString from './scoreOfString';

describe('scoreOfString()', () => {
  it('Case 1: should return correct score of string', () => {
    assert.equal(
      scoreOfString('hello'), 
      13,
    );
  });
  it('Case 2: should return correct score of string', () => {
    assert.equal(
      scoreOfString('zaz'), 
      50,
    );
  });
});
