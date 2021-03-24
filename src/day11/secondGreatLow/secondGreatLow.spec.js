import { assert } from 'chai';

import secondGreatLow from './secondGreatLow';

describe('secondGreatLow()', () => {
  it('should return "12, 98" when passed [7, 7, 12, 98, 106]', () => {
    assert.equal(secondGreatLow([7, 7, 12, 98, 106]), '12, 98');
  });
  it('should return "843, 845" when passed [45, 853, 845, 23, 892]', () => {
    assert.equal(secondGreatLow([45, 853, 845, 23, 892]), '853, 892');
  });
});
