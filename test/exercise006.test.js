const {
	sumMultiples,
	isValidDNA,
	getComplementaryDNA,
	isItPrime,
	createMatrix,
	areWeCovered,
} = require('../challenges/exercise006');

describe('sumMultiples', () => {
	test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
		expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
		expect(sumMultiples([5, 3, 7, 8, 1, 10, 9, 15])).toBe(42);
		expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
	});
});

describe('isValidDNA', () => {
	test('returns true/false depending on whether it is a valid DNA string', () => {
		expect(isValidDNA('CGTA')).toBe(true);
		expect(isValidDNA('CGTAA')).toBe(true);
		expect(isValidDNA('CGTAb')).toBe(false);
	});

	test('returns false if the string has letters other than C, T, G and A', () => {
		expect(isValidDNA('CGTSKJDHFCGATT')).toBe(false);
	});

	test('returns false if the string contains any non-letters', () => {
		expect(isValidDNA('CGTS333FCGATT')).toBe(false);
	});
});

describe('getComplementaryDNA', () => {
	test('returns a string of the complementary base pairs, either AT or CG', () => {
		expect(getComplementaryDNA('CGTA')).toEqual('GCAT');
		expect(getComplementaryDNA('CGTACGTA')).toEqual('GCATGCAT');
		expect(getComplementaryDNA('CGTAGAGGTCCA')).toBe('GCATCTCCAGGT');
	});
});

describe('isItPrime', () => {
	test('returns true if the number is prime', () => {
		expect(isItPrime(2)).toBe(true);
		expect(isItPrime(7)).toBe(true);
		expect(isItPrime(173)).toBe(true);
	});
	test('returns false if the number is not prime', () => {
		expect(isItPrime(4)).toBe(false);
		expect(isItPrime(253)).toBe(false);
		expect(isItPrime(1)).toBe(false);
		expect(isItPrime(21)).toBe(false);
	});
	test('returns false if the number is not an integer', () => {
		expect(isItPrime(3.5)).toBe(false);
	});
});

describe('createMatrix', () => {
	test('returns an array of n arrays, each filled with n items', () => {
		expect(createMatrix(3, 'foo')).toEqual([
			['foo', 'foo', 'foo'],
			['foo', 'foo', 'foo'],
			['foo', 'foo', 'foo'],
		]);
		expect(createMatrix(1, 'ShAbBa')).toEqual([['ShAbBa']]);
	});

	test('returns an array of n arrays containing the filler element n times', () => {
		expect(createMatrix(2, 'Jota')).toEqual([
			['Jota', 'Jota'],
			['Jota', 'Jota'],
		]);
		expect(createMatrix(4, 'Thiago')).toEqual([
			['Thiago', 'Thiago', 'Thiago', 'Thiago'],
			['Thiago', 'Thiago', 'Thiago', 'Thiago'],
			['Thiago', 'Thiago', 'Thiago', 'Thiago'],
			['Thiago', 'Thiago', 'Thiago', 'Thiago'],
		]);
	});
	test('returns an empty array if n is 0', () => {
		expect(createMatrix(0, 'Diaz')).toEqual([]);
	});
});

describe('areWeCovered', () => {
	test('returns true if at least 3 members of staff are working that day', () => {
		expect(
			areWeCovered(
				[
					{
						name: 'Jordan',
						rota: ['Monday', 'Tuesday', 'Wednesday'],
					},
					{
						name: 'Darwin',
						rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
					},
					{ name: 'Virgil', rota: ['Wednesday'] },
				],
				'Wednesday'
			)
		).toBe(true);
		expect(
			areWeCovered(
				[
					{
						name: 'Jordan',
						rota: ['Monday', 'Tuesday', 'Wednesday'],
					},
					{
						name: 'Darwin',
						rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
					},
					{ name: 'Virgil', rota: ['Wednesday'] },
					{ name: 'Cody', rota: ['Wednesday', 'Thursday'] },
				],
				'Wednesday'
			)
		).toBe(true);
	});
	test('returns false if 2 or fewer members of staff are working that day', () => {
		expect(
			areWeCovered(
				[
					{
						name: 'Jordan',
						rota: ['Monday', 'Tuesday', 'Wednesday'],
					},
					{
						name: 'Darwin',
						rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
					},
					{ name: 'Virgil', rota: ['Wednesday'] },
				],
				'Friday'
			)
		).toBe(false);
		expect(
			areWeCovered(
				[
					{
						name: 'Jordan',
						rota: ['Monday', 'Tuesday', 'Wednesday'],
					},
					{
						name: 'Darwin',
						rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
					},
					{ name: 'Virgil', rota: ['Wednesday'] },
				],
				'Saturday'
			)
		).toBe(false);
		expect(
			areWeCovered(
				[
					{
						name: 'Jordan',
						rota: ['Monday', 'Tuesday', 'Wednesday'],
					},
					{
						name: 'Darwin',
						rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'],
					},
					{ name: 'Virgil', rota: ['Wednesday'] },
				],
				'Tuesday'
			)
		).toBe(false);
	});
	test('returns false if array is empty', () => {
		expect(areWeCovered([], 'Wednesday')).toBe(false);
	});
});
