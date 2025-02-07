import simpleAdding from './simpleAdding';

describe('simpleAdding()', () => {
  test('should return 78 when passed 12', () => {
    expect(simpleAdding(12)).toBe(78);
  });

  describe('Different argument type cases', () => {
    test('should return 9870 when passed 140', () => {
      expect(simpleAdding(140)).toBe(9870);
    });
  });
});
