import firstFactorial from './firstFactorial';

describe('firstFactorial()', () => {
  it('should return 24 when passed 4', () => {
    expect(firstFactorial(4)).toBe(24);
  });

  it('should return 120 when passed 5', () => {
    expect(firstFactorial(5)).toBe(120);
  });

  it('should return 1 when passed 0', () => {
    expect(firstFactorial(0)).toBe(1);
  });

  describe('Different argument type cases', () => {
    it("should return 'undefined' when passed 5.25", () => {
      expect(firstFactorial(5.25)).toBeNull();
    });

    it('should return undefined when passed true', () => {
      expect(firstFactorial(true)).toBeNull();
    });

    it("should return undefined when passed '10'", () => {
      expect(firstFactorial('10')).toBeNull();
    });
  });
});
