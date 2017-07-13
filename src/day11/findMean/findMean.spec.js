// Specs for findMean.js

import {assert} from 'chai';

import findMean from './findMean.js';

describe('findMean()', () => {
    it('should return 2 when passed [1, 2, 3]', () => {
        assert.equal(findMean([1, 2, 3]), 2 );
    })
    it('should return 3 when passed [5, 3, 3, 2, 2]', () => {
        assert.equal(findMean([5, 3, 3, 2, 2]), 3);
    })
})
