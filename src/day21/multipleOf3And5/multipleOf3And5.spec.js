import multipleOf3And5 from "./multipleOf3And5";

describe("multipleOf3And5()", () => {
  test("should return 23 when passed 10", () => {
    expect(multipleOf3And5(10)).toBe(23);
  });
  test("should return 543 when passed 49", () => {
    expect(multipleOf3And5(49)).toBe(543);
  });
  test("should return 233168 when passed 1000", () => {
    expect(multipleOf3And5(1000)).toBe(233168);
  });
  test("should return 16687353 when passed 8456", () => {
    expect(multipleOf3And5(8456)).toBe(16687353);
  });
  test("should return 89301183 when passed 19564", () => {
    expect(multipleOf3And5(19564)).toBe(89301183);
  });
});
