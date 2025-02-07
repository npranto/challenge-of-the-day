import thirdGreatest from './thirdGreatest'

describe('thirdGreatest()', () => {
  test('returns "world" when passed (["hello", "world", "before", "all"], 3)', () => {
    expect(thirdGreatest(['hello', 'world', 'before', 'all'], 3)).toBe('world')
  })

  test('returns "four" when passed (["one", "two", "three", "four"], 3)', () => {
    expect(thirdGreatest(['one', 'two', 'three', 'four'], 3)).toBe('four')
  })
})
