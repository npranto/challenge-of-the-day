import { assert } from 'chai';
import powersOfTwo from './powersOfTwo';

describe('powersOfTwo()', () => {
  it('should return false when passed 16', () => {
    assert.equal(powersOfTwo(16), true);
  });
  describe('Different argument type cases', () => {
    it('should return false when passed 22', () => {
      assert.equal(powersOfTwo(22), false);
    });
  });
});
