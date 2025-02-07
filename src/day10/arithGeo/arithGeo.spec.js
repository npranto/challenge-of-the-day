import arithGeo from './arithGeo'

describe('arithGeo()', () => {
  test('returns "Arithmetic" for [2, 4, 6, 8]', () => {
    expect(arithGeo([2, 4, 6, 8])).toBe('Arithmetic')
  })

  test('returns "Geometric" for [2, 6, 18, 54]', () => {
    expect(arithGeo([2, 6, 18, 54])).toBe('Geometric')
  })

  test('returns -1 for [2, 8, 28, 3]', () => {
    expect(arithGeo([2, 8, 28, 3])).toBe(-1)
  })
})
