import secondGreatLow from './secondGreatLow';

describe('secondGreatLow()', () => {
  test('returns "12, 98" when passed [7, 7, 12, 98, 106]', () => {
    expect(secondGreatLow([7, 7, 12, 98, 106])).toBe('12, 98');
  });

  test('returns "845, 853" when passed [45, 853, 845, 23, 892]', () => {
    expect(secondGreatLow([45, 853, 845, 23, 892])).toBe('845, 853');
  });
});
