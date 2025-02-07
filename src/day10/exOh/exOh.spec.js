import exOh from "./exOh";

describe("exOh()", () => {
  test('returns false for "xooxxxxooxo"', () => {
    expect(exOh("xooxxxxooxo")).toBe(false);
  });

  test('returns true for "xxoxxooo"', () => {
    expect(exOh("xxoxxooo")).toBe(true);
  });
});
