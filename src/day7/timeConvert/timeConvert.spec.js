import timeConvert from './timeConvert'

describe('timeConvert()', () => {
  test('should return "02:06" when passed 126', () => {
    expect(timeConvert(126)).toBe('02:06')
  })

  test('should return "00:45" when passed 45', () => {
    expect(timeConvert(45)).toBe('00:45')
  })
})
