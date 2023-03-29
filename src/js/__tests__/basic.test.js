import Validator from '../basic';

test('validateUsername method exists and works correctly', () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy()})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('aBc123-456xYz')).toBeTruthy()})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('gIj78_90uVw')).toBeTruthy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('-name')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('name-')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('_name')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('name_')).toBeFalsy()});
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('1name')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('name1')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('na1234me')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('na.me')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('na!me')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('na[me')).toBeFalsy();})
test('validateUsername method exists and works correctly', () => {
  expect(Validator.validateUsername('na|me')).toBeFalsy();})

