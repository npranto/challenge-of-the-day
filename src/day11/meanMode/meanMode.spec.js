import meanMode from "./meanMode";

describe("meanMode()", () => {
  test("returns 1 when passed [5, 3, 3, 3, 1]", () => {
    expect(meanMode([5, 3, 3, 3, 1])).toBe(1);
  });

  test("returns 0 when passed [5, 3, 3, 2, 1]", () => {
    expect(meanMode([5, 3, 3, 2, 1])).toBe(0);
  });
});
