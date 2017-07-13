// Specs for findMode.js

import {assert} from 'chai';

import findMode from './findMode.js';

describe('findMode()', () => {
    it('should return null when passed [1, 2, 3]', () => {
        assert.equal(findMode([1, 2, 3]), null );
    })
    it('should return 3 when passed [5, 3, 3, 2, 2, 3]', () => {
        assert.equal(findMode([5, 3, 3, 2, 2, 3]), 3);
    })
})

