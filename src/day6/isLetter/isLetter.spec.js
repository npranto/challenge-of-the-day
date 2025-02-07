import isLetter from './isLetter'

describe('isLetter()', () => {
  test('should return true when passed "a"', () => {
    expect(isLetter('a')).toBe(true)
  })

  test('should return true when passed "F"', () => {
    expect(isLetter('F')).toBe(true)
  })

  test('should return false when passed "+"', () => {
    expect(isLetter('+')).toBe(false)
  })
})
