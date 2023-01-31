const stringLength = require('./stringLength');

it('returns a number count', () => {
  expect(stringLength("123456")).toBe(6)
});

it('checks if argument is less than 0 or greater than or equal 10', () => {
  expect(() => stringLength("")).toThrow(Error)
});

