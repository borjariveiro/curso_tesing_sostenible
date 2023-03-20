import { fizzbuzz } from '../core/fizzbuzz';

test('if number is one should return one as string', () => {
	const result = fizzbuzz(1);
	const expected = '1';

	expect(result).toBe(expected);
});

test('if number is one should return two as string', () => {
	const result = fizzbuzz(2);
	const expected = '2';

	expect(result).toBe(expected);
});

test('if number is 3 should return fizz', () => {
	const result = fizzbuzz(3);
	const expected = 'fizz';

	expect(result).toBe(expected);
});

test('if number is 5 should return buzz', () => {
	const result = fizzbuzz(5);
	const expected = 'buzz';

	expect(result).toBe(expected);
});

test('if number is 15 should return fizzbuzz', () => {
	const result = fizzbuzz(15);
	const expected = 'fizzbuzz';

	expect(result).toBe(expected);
});

test('if number divisor of 3 should return fizz', () => {
	const result = fizzbuzz(9);
	const expected = 'fizz';

	expect(result).toBe(expected);
});

test('if number divisor of 5 should return buzz', () => {
	const result = fizzbuzz(10);
	const expected = 'buzz';

	expect(result).toBe(expected);
});

test('if number divisor of 15 should return fizzbuzz', () => {
	const result = fizzbuzz(30);
	const expected = 'fizzbuzz';

	expect(result).toBe(expected);
});

test('if number divisor of 15 should return fizzbuzz', () => {
	const result = fizzbuzz(30);
	const expected = 'fizzbuzz';

	expect(result).toBe(expected);
});

test('if number is is not divisible by three or five should returns number as string', () => {
	const result = fizzbuzz(2);
	const expected = '2';

	expect(result).toBe(expected);
});
