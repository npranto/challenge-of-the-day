import evenFibonacci from './evenFibonacci'

describe('evenFibonacci()', () => {
  test('returns the sum of even Fibonacci numbers up to the passed value', () => {
    expect(evenFibonacci(10)).toBe(10)
    expect(evenFibonacci(60)).toBe(44)
    expect(evenFibonacci(1000)).toBe(798)
    expect(evenFibonacci(100000)).toBe(60696)
  })
})
