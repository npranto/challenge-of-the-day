
// Specs for powersofTwo.js

import {assert} from 'chai';
import powersofTwo from './powersofTwo.js';

describe('powersofTwo()', () => {
    it('should return false when passed 16', () => {
        assert.equal(powersofTwo(16), true);
    })
    describe('Different argument type cases', () => {
        it('should return false when passed 22', () => {
            assert.equal(powersofTwo(22), false);
        })
    })
})
