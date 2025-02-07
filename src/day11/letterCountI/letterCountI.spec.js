import letterCountI from "./letterCountI";

describe("letterCountI()", () => {
  test('returns "greatest" when passed "Today, is the greatest day ever!"', () => {
    expect(letterCountI("Today, is the greatest day ever!")).toBe(
      "\"greatest\" contains 'e' (2) times",
    );
  });

  test('returns "brooo" when passed "What in the world brooo!"', () => {
    expect(letterCountI("What in the world brooo!")).toBe(
      "\"brooo\" contains 'o' (3) times",
    );
  });
});
