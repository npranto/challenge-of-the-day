import simpleSymbols from './simpleSymbols'

describe('simpleSymbols()', () => {
  test('should return "true" when passed "+d+=3=+s+"', () => {
    expect(simpleSymbols('+d+=3=+s+')).toBe('true')
  })

  test('should return "false" when passed "f++d+"', () => {
    expect(simpleSymbols('f++d+')).toBe('false')
  })
})
