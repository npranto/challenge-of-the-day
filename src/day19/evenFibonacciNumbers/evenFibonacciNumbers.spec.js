import { assert } from 'chai';
import evenFibonacciNumbers from './evenFibonacciNumbers';

describe(`evenFibonacciNumbers()`, function() {
	it(`should return 4613730`, function() {
    assert.equal(evenFibonacciNumbers(), 4613730);
  })
});

