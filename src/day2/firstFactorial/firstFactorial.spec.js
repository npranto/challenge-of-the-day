import { assert } from 'chai';

import firstFactorial from './firstFactorial';

describe('firstFactorial()', () => {
  it('should return 24 when passed 4', () => {
    assert.equal(firstFactorial(4), 24);
  });
  it('should return 120 when passed 5', () => {
    assert.equal(firstFactorial(5), 120);
  });
  it('should return 1 when passed 0', () => {
    assert.equal(firstFactorial(0), 1);
  });
  describe('Different argument type cases', () => {
    it("should return 'undefined' when passed 5.25", () => {
      assert.equal(firstFactorial(5.25), undefined);
    });
    it('should return undefined when passed true', () => {
      assert.equal(firstFactorial(true), undefined);
    });
    it("should return undefined when passed '10'", () => {
      assert.equal(firstFactorial(true), undefined);
    });
  });
});
