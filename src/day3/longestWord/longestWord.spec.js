import { assert } from 'chai';
import longestWord from './longestWord';

describe('longestWord()', () => {
  it("should return 'fun' when passed 'fun&!! time'", () => {
    assert.equal(longestWord('fun&!! time'), 'fun');
  });
  it("should return 'I' when passed 'I love dogs'", () => {
    assert.equal(longestWord('I love dogs'), 'I');
  });
});
