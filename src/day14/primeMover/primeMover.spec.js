import primeMover from './primeMover'

describe('primeMover()', () => {
  test('returns 53 when passed 16', () => {
    expect(primeMover(16)).toBe(53)
  })

  test('returns 5 when passed 3', () => {
    expect(primeMover(3)).toBe(5)
  })
})
