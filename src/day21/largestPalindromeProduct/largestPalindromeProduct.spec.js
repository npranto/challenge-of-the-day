import largestPalindromeProduct from "./largestPalindromeProduct";

describe("largestPalindromeProduct()", () => {
  test("should return 9009 when passed 2", () => {
    expect(largestPalindromeProduct(2)).toBe(9009);
  });
  test("should return 906609 when passed 3", () => {
    expect(largestPalindromeProduct(3)).toBe(906609);
  });
});
