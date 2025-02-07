import scoreOfString from './scoreOfString';

describe('scoreOfString()', () => {
  test('Case 1: should return correct score of string', () => {
    expect(scoreOfString('hello')).toBe(13);
  });

  test('Case 2: should return correct score of string', () => {
    expect(scoreOfString('zaz')).toBe(50);
  });
});
