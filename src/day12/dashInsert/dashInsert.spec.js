// Specs for palindrome.js
import {assert} from 'chai';

import dashInsert from './dashInsert.js';

describe('dashInsert()', () => {
    it('should return "47-5-38" when passed 47538', () => {
        assert.equal(dashInsert(47538), "47-5-38");
    })
    it('should return "8901-32" when passed 890132', () => {
        assert.equal(dashInsert(890132), "8901-32");
    })
    it('should return "5647" when passed 5647', () => {
        assert.equal(dashInsert(5647), "5647");
    })
})




