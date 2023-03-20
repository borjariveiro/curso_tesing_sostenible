export const fizzbuzz = (number: number): string => {
	function isDivisibleBy(divisor: number) {
		return number % divisor === 0;
	}
	if (isDivisibleBy(3) && isDivisibleBy(5)) {
		return 'fizzbuzz';
	}

	if (isDivisibleBy(3)) {
		return 'fizz';
	}

	if (isDivisibleBy(5)) {
		return 'buzz';
	}

	return String(number);
};
