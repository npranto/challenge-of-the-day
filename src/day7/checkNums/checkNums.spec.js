import checkNums from "./checkNums";

describe("checkNums()", () => {
  test('should return "true" when passed (3, 122)', () => {
    expect(checkNums(3, 122)).toBe("true");
  });

  test('should return "-1" when passed (10, 10)', () => {
    expect(checkNums(10, 10)).toBe("-1");
  });

  test('should return "false" when passed (15, 7)', () => {
    expect(checkNums(15, 7)).toBe("false");
  });
});
