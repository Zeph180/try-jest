const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

it('returns a number count', () => {
  expect(stringLength("123456")).toBe(6)
});

it('checks if argument is less than 0 or greater than or equal 10', () => {
  expect(() => stringLength("")).toThrow(Error)
});

it('checks if argument is reversed', () => {
  expect(reverseString("Hello")).toBe("olleH")
});

