import isFactor from './isFactor';

describe('isFactor()', () => {
  test('returns true when passed 3 and 12', () => {
    expect(isFactor(3, 12)).toBe(true);
  });

  test('returns false when passed 3 and 13', () => {
    expect(isFactor(3, 13)).toBe(false);
  });
});
