// Specs for meanMode.js

import {assert} from 'chai';

import meanMode from './meanMode.js';

describe('meanMode()', () => {
    it('should return 1 when passed [5, 3, 3, 3, 1]', () => {
        assert.equal(meanMode([5, 3, 3, 3, 1]), 1 );
    })
    it('should return 0 when passed [5, 3, 3, 2, 1]', () => {
        assert.equal(meanMode([5, 3, 3, 2, 1]), 0);
    })
})

