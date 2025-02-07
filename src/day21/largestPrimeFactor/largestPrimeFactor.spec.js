import largestPrimeFactor from './largestPrimeFactor'

describe('largestPrimeFactor()', () => {
  test('should return 2 when passed 2', () => {
    expect(largestPrimeFactor(2)).toBe(2)
  })
  test('should return 3 when passed 3', () => {
    expect(largestPrimeFactor(3)).toBe(3)
  })
  test('should return 5 when passed 5', () => {
    expect(largestPrimeFactor(5)).toBe(5)
  })
  test('should return 7 when passed 7', () => {
    expect(largestPrimeFactor(7)).toBe(7)
  })
  test('should return 29 when passed 13195', () => {
    expect(largestPrimeFactor(13195)).toBe(29)
  })
})
