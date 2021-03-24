import { assert } from 'chai';
import simpleAdding from './simpleAdding';

describe('simpleAdding()', () => {
  it('should return 78 when passed 12', () => {
    assert.equal(simpleAdding(12), 78);
  });
  describe('Different argument type cases', () => {
    it('should return 9870 when passed 140', () => {
      assert.equal(simpleAdding(140), 9870);
    });
  });
});
