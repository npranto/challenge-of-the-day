import findMode from './findMode'

describe('findMode()', () => {
  test('returns null for [1, 2, 3]', () => {
    expect(findMode([1, 2, 3])).toBeNull()
  })

  test('returns 3 for [5, 3, 3, 2, 2, 3]', () => {
    expect(findMode([5, 3, 3, 2, 2, 3])).toBe(3)
  })
})
