import { assert } from 'chai';
import primeTime from './primeTime';

describe('primeTime()', () => {
  it('should return true when passed 7', () => {
    assert.equal(primeTime(7), true);
  });
  it('should return false when passed 9', () => {
    assert.equal(primeTime(9), false);
  });
  it('should return false when passed 0', () => {
    assert.equal(primeTime(0), false);
  });
  it('should return true when passed 13', () => {
    assert.equal(primeTime(13), true);
  });
});
