import { transformToCamelCase } from '../core/camelCaseConverter';

describe('Camel Case converter', () => {
	test('Allows empty text', () => {
		const result = transformToCamelCase('');
		expect(result).toBe('');
	});

	test('Allows capitalize word', () => {
		const result = transformToCamelCase('Foo');
		expect(result).toBe('Foo');
	});

	test('Joins the capitalized words that are separated by spaces', () => {
		const result = transformToCamelCase('Foo Bar');
		expect(result).toBe('FooBar');
	});

	test('Joins the capitalized words that are separated by hyphens', () => {
		const result = transformToCamelCase('Foo_Bar-Foo');
		expect(result).toBe('FooBarFoo');
	});

	test('Converts the first character of one word to uppercase', () => {
		const result = transformToCamelCase('foo');
		expect(result).toBe('Foo');
	});

	test('Converts the first character of each word to uppercase', () => {
		const result = transformToCamelCase('foo_bar foo-bar');
		expect(result).toBe('FooBarFooBar');
	});
});
