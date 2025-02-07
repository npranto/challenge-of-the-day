import largestPrimeFactor from './largestPrimeFactor';

describe('largestPrimeFactor()', () => {
  test('returns 29 when passed 13195', () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });
});
