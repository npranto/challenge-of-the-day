import { assert } from 'chai';
import alphabetSoup from './alphabetSoup';

describe('alphabetSoup()', () => {
  it('should return "bcdeeorty" when passed "coderbyte"', () => {
    assert.equal(alphabetSoup('coderbyte'), 'bcdeeorty');
  });
  it('should return "ahhloop" when passed "hooplah"', () => {
    assert.equal(alphabetSoup('hooplah'), 'ahhloop');
  });
});
