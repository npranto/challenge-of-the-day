import powersOfTwo from './powersOfTwo';

describe('powersOfTwo()', () => {
  test('returns true when passed 16', () => {
    expect(powersOfTwo(16)).toBe(true);
  });

  describe('Different argument type cases', () => {
    test('returns false when passed 22', () => {
      expect(powersOfTwo(22)).toBe(false);
    });
  });
});
