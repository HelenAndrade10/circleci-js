const { Add } = require('./main');

describe('Add function', () => {
  it('should return the sum of two numbers', () => {
    expect(Add(2, 3)).toBe(5);
    expect(Add(5, 5)).toBe(10);
  });
});