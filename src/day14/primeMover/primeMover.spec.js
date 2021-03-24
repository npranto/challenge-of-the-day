import { assert } from 'chai';
import primeMover from './primeMover';

describe('primeMover()', () => {
  it('should return 53 when passed 16', () => {
    assert.equal(primeMover(16), 53);
  });
  it('should return 5 when passed 3', () => {
    assert.equal(primeMover(3), 5);
  });
});
