import { assert } from 'chai';

import exOh from './exOh';

describe('exOh()', () => {
  it('should return false when passed "xooxxxxooxo"', () => {
    assert.equal(exOh('xooxxxxooxo'), false);
  });
  it('should return true when passed "xxoxxooo"', () => {
    assert.equal(exOh('xxoxxooo'), true);
  });
});
