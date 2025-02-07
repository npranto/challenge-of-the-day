import isPrime from './isPrime';

describe('isPrime()', () => {
  test('returns true when passed 5', () => {
    expect(isPrime(5)).toBe(true);
  });

  test('returns true when passed 13', () => {
    expect(isPrime(13)).toBe(true);
  });

  test('returns false when passed 28', () => {
    expect(isPrime(28)).toBe(false);
  });
});
