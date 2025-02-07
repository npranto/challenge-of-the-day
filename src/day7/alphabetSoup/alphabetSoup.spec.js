import alphabetSoup from './alphabetSoup';

describe('alphabetSoup()', () => {
  test('should return "bcdeeorty" when passed "coderbyte"', () => {
    expect(alphabetSoup('coderbyte')).toBe('bcdeeorty');
  });

  test('should return "ahhloop" when passed "hooplah"', () => {
    expect(alphabetSoup('hooplah')).toBe('ahhloop');
  });
});
