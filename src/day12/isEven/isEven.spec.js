import isEven from './isEven'

describe('isEven()', () => {
  test('returns false when passed 1', () => {
    expect(isEven(1)).toBe(false)
  })

  test('returns false when passed 9', () => {
    expect(isEven(9)).toBe(false)
  })

  test('returns true when passed 4', () => {
    expect(isEven(4)).toBe(true)
  })
})
