import swapCase from './swapCase';

describe('swapCase()', () => {
  test('returns "hELLO wORLD" when passed "Hello World"', () => {
    expect(swapCase('Hello World')).toBe('hELLO wORLD');
  });

  test('returns "are you serius?" when passed "ARE YOU SERIUS?"', () => {
    expect(swapCase('ARE YOU SERIUS?')).toBe('are you serius?');
  });

  test('returns "bRO, lEbRON jAMES IS 33 YEARS OLD AND HE\'S STILL PLAYING LIKE WHEN HE WAS IN HIS PRIME, LOL!" when passed "Bro, LeBron James is 33 years old and he\'s still playing like when he was in his prime, lol!"', () => {
    expect(
      swapCase(
        "Bro, LeBron James is 33 years old and he's still playing like when he was in his prime, lol!"
      )
    ).toBe(
      "bRO, lEbRON jAMES IS 33 YEARS OLD AND HE'S STILL PLAYING LIKE WHEN HE WAS IN HIS PRIME, LOL!"
    );
  });
});
