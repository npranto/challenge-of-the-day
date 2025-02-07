import letterCapitalize from "./letterCapitalize";

describe("letterCapitalize()", () => {
  test('should return "Hello World" when passed "hello world"', () => {
    expect(letterCapitalize("hello world")).toBe("Hello World");
  });

  test('should return "I Ran There" when passed "i ran there"', () => {
    expect(letterCapitalize("i ran there")).toBe("I Ran There");
  });
});
