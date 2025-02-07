import wordCount from './wordCount';

describe('wordCount()', () => {
  test('should return 4 when passed "All cows eat grass"', () => {
    expect(wordCount('All cows eat grass')).toBe(4);
  });
  test('should return 10 when passed "lane   cborrowed, why of sd f  dfgdfg gdfggd gh blue"', () => {
    expect(
      wordCount('lane   cborrowed, why of sd f  dfgdfg gdfggd gh blue')
    ).toBe(10);
  });
});
