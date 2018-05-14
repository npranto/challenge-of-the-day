// Specs for divisionStringified.js

import {assert} from 'chai';

import divisionStringified from './divisionStringified.js';

describe('divisionStringified()', () => {
    it('should return "12,345" when passed 123456789 and 10000', () => {
        assert.equal(divisionStringified(123456789, 10000), "12,346" );
    })
    it('should return "200" when passed 1000 and 5', () => {
        assert.equal(divisionStringified(1000, 5), "200");
    })
    it('should throw error when passed "hello" and 5', () => {
        assert.throw(divisionStringified, Error, "parameters must be type number");
    })
});