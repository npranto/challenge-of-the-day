import aBCheck from './aBCheck'

describe('aBCheck()', () => {
  test('should return true when passed "lane borrowed"', () => {
    expect(aBCheck('lane borrowed')).toBe(true)
  })

  test('should return false when passed "lane cborrowed"', () => {
    expect(aBCheck('lane cborrowed')).toBe(false)
  })
})
