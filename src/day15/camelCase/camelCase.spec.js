import { assert } from 'chai';

import camelCase from './camelCase';

describe('camelCase()', () => {
  it('should return "findMean" when passed "find mean"', () => {
    assert.equal(camelCase('find mean'), 'findMean');
  });
  it('should return "helloWorld" when passed "hello world"', () => {
    assert.equal(camelCase('hello world'), 'helloWorld');
  });
});
