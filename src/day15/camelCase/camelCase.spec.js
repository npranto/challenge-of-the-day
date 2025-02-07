import camelCase from './camelCase';

describe('camelCase()', () => {
  test('returns "findMean" when passed "find mean"', () => {
    expect(camelCase('find mean')).toBe('findMean');
  });

  test('returns "helloWorld" when passed "hello world"', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });
});
