import vowelCount from './vowelCount';

describe('vowelCount()', () => {
  test('should return 5 when passed "All cows eat grass"', () => {
    expect(vowelCount('All cows eat grass')).toBe(5);
  });
  test('should return 5 when passed "lane cborrowed"', () => {
    expect(vowelCount('lane cborrowed')).toBe(5);
  });
});
