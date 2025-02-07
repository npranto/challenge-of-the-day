import sumSquareDifference from './sumSquareDifference'

describe('sumSquareDifference()', () => {
  test('should return 2640 when passed 10', () => {
    expect(sumSquareDifference(10)).toBe(2640)
  })
  test('should return 41230 when passed 20', () => {
    expect(sumSquareDifference(20)).toBe(41230)
  })
})
