import { assert } from 'chai';

import letterCountI from './letterCountI';

describe('letterCountI()', () => {
  it('should return "greatest" when passed "Today, is the greatest day ever!"', () => {
    assert.equal(
      letterCountI('Today, is the greatest day ever!'),
      '"greatest" contains \'e\' (2) times',
    );
  });
  it('should return "brooo" when passed "What in the world brooo!"', () => {
    assert.equal(
      letterCountI('What in the world brooo!'),
      '"brooo" contains \'o\' (3) times',
    );
  });
});
