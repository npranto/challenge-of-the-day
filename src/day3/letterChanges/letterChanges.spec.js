import letterChanges from './letterChanges'

describe('letterChanges()', () => {
  test("should return 'Ifmmp*3' when passed 'hello*3'", () => {
    expect(letterChanges('hello*3')).toBe('Ifmmp*3')
  })

  test("should return 'gvO Ujnft!' when passed 'fun times!'", () => {
    expect(letterChanges('fun times!')).toBe('gvO Ujnft!')
  })
})
