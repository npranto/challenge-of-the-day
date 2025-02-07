import trimPunctuationsFromBothEnd from './trimPunctuationsFromBothEnd';

describe('trimPunctuationsFromBothEnd()', () => {
  test('should return "All" when passed "All"', () => {
    expect(trimPunctuationsFromBothEnd('All')).toBe('All');
  });
  test('should return "All" when passed "All,"', () => {
    expect(trimPunctuationsFromBothEnd('All,')).toBe('All');
  });
  test('should return "All" when passed "!All"', () => {
    expect(trimPunctuationsFromBothEnd('!All')).toBe('All');
  });
  test('should return "All" when passed ",All!"', () => {
    expect(trimPunctuationsFromBothEnd(',All!')).toBe('All');
  });
});
