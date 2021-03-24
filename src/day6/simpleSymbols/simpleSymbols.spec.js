import { assert } from 'chai';
import simpleSymbols from './simpleSymbols';

describe('simpleSymbols()', () => {
  it('should return "true" when passed "+d+=3=+s+"', () => {
    assert.equal(simpleSymbols('+d+=3=+s+'), 'true');
  });
  it('should return "false" when passed "f++d+"', () => {
    assert.equal(simpleSymbols('f++d+'), 'false');
  });
});
