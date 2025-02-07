import numberOfTimesLetterOccurInWord from "./numberOfTimesLetterOccurInWord";

describe("numberOfTimesLetterOccurInWord()", () => {
  test('returns 2 when passed ("l", ["h","e","l","l","o"])', () => {
    expect(numberOfTimesLetterOccurInWord("l", ["h", "e", "l", "l", "o"])).toBe(
      2,
    );
  });

  test('returns 1 when passed ("a", ["w","h","a","t"])', () => {
    expect(numberOfTimesLetterOccurInWord("a", ["w", "h", "a", "t"])).toBe(1);
  });

  test('returns 0 when passed ("b", ["w","h","a","t"])', () => {
    expect(numberOfTimesLetterOccurInWord("b", ["w", "h", "a", "t"])).toBe(0);
  });
});
