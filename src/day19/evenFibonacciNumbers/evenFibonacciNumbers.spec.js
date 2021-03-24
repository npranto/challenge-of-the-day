import { assert } from 'chai';
import evenFibonacciNumbers from './evenFibonacciNumbers';

describe('evenFibonacciNumbers()', () => {
  it('should return 4613730', () => {
    assert.equal(evenFibonacciNumbers(), 4613730);
  });
});
