import divisionStringified from './divisionStringified';

describe('divisionStringified()', () => {
  test('returns "12,346" when passed 123456789 and 10000', () => {
    expect(divisionStringified(123456789, 10000)).toBe('12,346');
  });

  test('returns "200" when passed 1000 and 5', () => {
    expect(divisionStringified(1000, 5)).toBe('200');
  });

  test('throws error when passed "hello" and 5', () => {
    expect(() => divisionStringified('hello', 5)).toThrowError(
      'parameters must be type number'
    );
  });
});
