// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone number tests
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('1234567890 is not a valid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('123-45-6789 is not a valid phone number', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
});

// Email tests
test('test@example.com is a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('user_name@domain.co is a valid email', () => {
  expect(isEmail('user_name@domain.co')).toBe(true);
});
test('test@.com is not a valid email', () => {
  expect(isEmail('test@.com')).toBe(false);
});
test('test@com is not a valid email', () => {
  expect(isEmail('test@com')).toBe(false);
});

// Password Tests
test('Abcd_123 is a strong password', () => {
  expect(isStrongPassword('Abcd_123')).toBe(true);
});
test('a123 is a strong password', () => {
  expect(isStrongPassword('a123')).toBe(true);
});
test('1abc is not a strong password', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('abc is not a strong password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// Date Tests
test('1/1/2025 is a valid date', () => {
  expect(isDate('1/1/2025')).toBe(true);
});
test('12/31/1999 is a valid date', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('123/1/2020 is not a valid date', () => {
  expect(isDate('123/1/2020')).toBe(false);
});
test('01-01-2020 is not a valid date', () => {
  expect(isDate('01-01-2020')).toBe(false);
});

// Hex tests
test('#fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('#123ABC is a valid hex color', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('123abz is not a valid hex color', () => {
  expect(isHexColor('123abz')).toBe(false);
});
test('#1234 is not a valid hex color', () => {
  expect(isHexColor('#1234')).toBe(false);
});