import longestWord from './longestWord'

describe('longestWord()', () => {
  test("should return 'fun' when passed 'fun&!! time'", () => {
    expect(longestWord('fun&!! time')).toBe('fun')
  })

  test("should return 'I' when passed 'I love dogs'", () => {
    expect(longestWord('I love dogs')).toBe('I')
  })
})
