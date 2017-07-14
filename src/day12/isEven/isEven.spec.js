// Specs for palindrome.js
import {assert} from 'chai';

import isEven from './isEven.js';

describe('isEven()', () => {
    it('should return false when passed 1', () => {
        assert.equal(isEven(1), false);
    })
    it('should return false when passed 9', () => {
        assert.equal(isEven(9), false);
    })
    it('should return true when passed 4', () => {
        assert.equal(isEven(4), true);
    })
})




