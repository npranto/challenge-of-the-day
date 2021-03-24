import { assert } from 'chai';
import isVowel from './isVowel';

describe('isVowel()', () => {
  describe('Check all the vowels', () => {
    it('should return true when passed "a"', () => {
      assert.equal(isVowel('a'), true);
    });
    it('should return true when passed "e"', () => {
      assert.equal(isVowel('e'), true);
    });
    it('should return true when passed "i"', () => {
      assert.equal(isVowel('i'), true);
    });
    it('should return true when passed "o"', () => {
      assert.equal(isVowel('o'), true);
    });
    it('should return true when passed "u"', () => {
      assert.equal(isVowel('u'), true);
    });
  });
  describe('Check a few consonants', () => {
    it('should return false when passed "b"', () => {
      assert.equal(isVowel('b'), false);
    });
    it('should return false when passed "p"', () => {
      assert.equal(isVowel('p'), false);
    });
    it('should return false when passed "y"', () => {
      assert.equal(isVowel('y'), false);
    });
  });
});
