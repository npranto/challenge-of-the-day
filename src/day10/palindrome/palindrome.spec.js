import palindrome from "./palindrome";

describe("palindrome()", () => {
  test('returns true for "racecar"', () => {
    expect(palindrome("racecar")).toBe(true);
  });

  test('returns false for "noway"', () => {
    expect(palindrome("noway")).toBe(false);
  });

  test('returns true for "nanan"', () => {
    expect(palindrome("nanan")).toBe(true);
  });
});
