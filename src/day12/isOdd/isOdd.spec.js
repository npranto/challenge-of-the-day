import isOdd from './isOdd'

describe('isOdd()', () => {
  test('returns true when passed 1', () => {
    expect(isOdd(1)).toBe(true)
  })

  test('returns true when passed 9', () => {
    expect(isOdd(9)).toBe(true)
  })

  test('returns false when passed 4', () => {
    expect(isOdd(4)).toBe(false)
  })
})
