import findMean from './findMean';

describe('findMean()', () => {
  test('returns 2 for [1, 2, 3]', () => {
    expect(findMean([1, 2, 3])).toBe(2);
  });

  test('returns 3 for [5, 3, 3, 2, 2]', () => {
    expect(findMean([5, 3, 3, 2, 2])).toBe(3);
  });
});
