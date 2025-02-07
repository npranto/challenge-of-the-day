import firstReverse from './firstReverse'

describe('firstReverse()', () => {
  test("should return 'bikahs' when passed 'shakib'", () => {
    expect(firstReverse('shakib')).toBe('bikahs')
  })

  test("should return '' when passed ''", () => {
    expect(firstReverse('')).toBe('')
  })

  test("should return 'a' when passed 'a'", () => {
    expect(firstReverse('a')).toBe('a')
  })

  test("should return '?uoy era woh ,olleh' when passed 'hello, how are you?'", () => {
    expect(firstReverse('hello, how are you?')).toBe('?uoy era woh ,olleh')
  })

  describe('Different argument type cases', () => {
    test("should return 'undefined' when passed 5", () => {
      expect(firstReverse(5)).toBeNull()
    })

    test('should return undefined when passed true', () => {
      expect(firstReverse(true)).toBeNull()
    })
  })
})
