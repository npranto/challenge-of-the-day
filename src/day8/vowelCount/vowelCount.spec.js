import { assert } from 'chai';
import vowelCount from './vowelCount';

describe('vowelCount()', () => {
  it('should return 5 when passed "All cows eat grass"', () => {
    assert.equal(vowelCount('All cows eat grass'), 5);
  });
  it('should return 5 when passed "lane cborrowed"', () => {
    assert.equal(vowelCount('lane cborrowed'), 5);
  });
});
