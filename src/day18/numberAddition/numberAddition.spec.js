import numberAddition from './numberAddition';

describe('numberAddition()', () => {
  it('should return 0 for an empty string', () => {
    expect(numberAddition('')).toBe(0);
  });

  it('should return 0 when there are no numbers in the string', () => {
    expect(numberAddition('hello world')).toBe(0);
  });

  it('should return the number itself when the string contains a single number', () => {
    expect(numberAddition('42')).toBe(42);
  });

  it('should correctly sum up numbers in a string with multiple numbers', () => {
    expect(numberAddition('The 1 quick 2 brown foxes 3')).toBe(6);
  });

  it('should handle numbers embedded in words and symbols correctly', () => {
    expect(numberAddition('My house number is 15, and I paid 30 dollars')).toBe(
      45
    );
  });

  it('should correctly sum numbers separated by spaces and special characters', () => {
    expect(numberAddition('12$ 34! 56? 78&')).toBe(180);
  });

  it('should return 0 when there are no numbers (even with punctuation)', () => {
    expect(numberAddition('abc!@#$%^')).toBe(0);
  });

  it('should return the correct sum when there are multiple numbers with spaces between them', () => {
    expect(numberAddition('1 2 3 4 5')).toBe(15);
  });

  it('should correctly parse multiple numbers embedded in larger strings with mixed content', () => {
    expect(numberAddition('abc1234def5678')).toBe(6912);
  });

  it('should handle negative numbers', () => {
    expect(
      numberAddition('The temperature dropped by -5 degrees in the last hour')
    ).toBe(-5);
  });

  it('should handle decimal numbers (if relevant)', () => {
    expect(
      numberAddition('The total cost is 12.50 dollars and 7.50 dollars more')
    ).toBe(20);
  });

  it('should return 0 if the string only contains non-numeric characters, like empty spaces and symbols', () => {
    expect(numberAddition('!@#$%^&*()')).toBe(0);
  });
});
