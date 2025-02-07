import isVowel from "./isVowel";

describe("isVowel()", () => {
  describe("Check all the vowels", () => {
    test('should return true when passed "a"', () => {
      expect(isVowel("a")).toBe(true);
    });
    test('should return true when passed "e"', () => {
      expect(isVowel("e")).toBe(true);
    });
    test('should return true when passed "i"', () => {
      expect(isVowel("i")).toBe(true);
    });
    test('should return true when passed "o"', () => {
      expect(isVowel("o")).toBe(true);
    });
    test('should return true when passed "u"', () => {
      expect(isVowel("u")).toBe(true);
    });
  });

  describe("Check a few consonants", () => {
    test('should return false when passed "b"', () => {
      expect(isVowel("b")).toBe(false);
    });
    test('should return false when passed "p"', () => {
      expect(isVowel("p")).toBe(false);
    });
    test('should return false when passed "y"', () => {
      expect(isVowel("y")).toBe(false);
    });
  });
});
