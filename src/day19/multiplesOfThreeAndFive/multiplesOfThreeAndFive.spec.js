import sumOfMultiplesOfThreeAndFive from './multiplesOfThreeAndFive';

describe('sumOfMultiplesOfThreeAndFive()', () => {
  test('returns 23 when passed 10', () => {
    expect(sumOfMultiplesOfThreeAndFive(10)).toBe(23);
  });

  test('returns 233168 when passed 1000', () => {
    expect(sumOfMultiplesOfThreeAndFive(1000)).toBe(233168);
  });
});
