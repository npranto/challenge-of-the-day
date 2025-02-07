import primeTime from "./primeTime";

describe("primeTime()", () => {
  test("returns true when passed 7", () => {
    expect(primeTime(7)).toBe(true);
  });

  test("returns false when passed 9", () => {
    expect(primeTime(9)).toBe(false);
  });

  test("returns false when passed 0", () => {
    expect(primeTime(0)).toBe(false);
  });

  test("returns true when passed 13", () => {
    expect(primeTime(13)).toBe(true);
  });
});
