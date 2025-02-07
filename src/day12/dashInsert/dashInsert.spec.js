import dashInsert from "./dashInsert";

describe("dashInsert()", () => {
  test('returns "47-5-38" when passed 47538', () => {
    expect(dashInsert(47538)).toBe("47-5-38");
  });

  test('returns "8901-32" when passed 890132', () => {
    expect(dashInsert(890132)).toBe("8901-32");
  });

  test('returns "5647" when passed 5647', () => {
    expect(dashInsert(5647)).toBe("5647");
  });
});
