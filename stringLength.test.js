const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const capitalize = require('./capitalize');

it('returns a number count', () => {
  expect(stringLength("123456")).toBe(6)
});

it('checks if argument is less than 0 or greater than or equal 10', () => {
  expect(() => stringLength("")).toThrow(Error)
});

it('checks if argument is reversed', () => {
  expect(reverseString("Hello")).toBe("olleH")
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1,2)).toBe(3)
  });

  test('multiply two numbers', () => {
    expect(calculator.multiply(2,2)).toBe(4)
  });
  
  test('divides two numbers', () => {
    expect(calculator.divide(4,2)).toBe(2)
  });

  test('subtracts from number', () => {
    expect(calculator.subtract(2,2)).toBe(0)
  });
});

describe('capitalize', () => {
  test('check if arg is number', () => {
    expect(capitalize(1222)).toBe("Not allowed")
  });
  
  test('check if first vale is uppercase', () => {
    expect(capitalize("hello")).toBe("Hello")
  });
  
});