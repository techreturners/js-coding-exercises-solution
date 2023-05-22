const {
	sumDigits,
	createRange,
	getScreentimeAlertList,
	hexToRGB,
	findWinner,
} = require('../challenges/exercise007-optional');

describe('sumDigits', () => {
	test('returns the sum of all individual digits', () => {
		expect(sumDigits(123)).toBe(6);
		expect(sumDigits(355)).toBe(13);
		expect(sumDigits(11)).toBe(2);
	});
	test('returns the sum of the digits of n where n is an integer', () => {
		expect(sumDigits(31)).toBe(4);
		expect(sumDigits(483)).toBe(15);
	});
	test('returns the sum of the digits of n where n is not an integer', () => {
		expect(sumDigits(3.5)).toBe(8);
	});
});

describe('createRange', () => {
	test('creates a range of numbers as an array with an incremental step', () => {
		expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
		expect(createRange(9, 100, 9)).toEqual([
			9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99,
		]);
		expect(createRange(3, 14)).toEqual([
			3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
		]);
	});
});

describe('getScreentimeAlertList', () => {
	test('returns an array of usernames of users who have used more than 100 minutes', () => {
		const users = [
			{
				username: 'beth_1234',
				name: 'Beth Smith',
				screenTime: [
					{
						date: '2019-05-01',
						usage: { twitter: 34, instagram: 22, facebook: 40 },
					},
					{
						date: '2019-05-02',
						usage: { twitter: 56, instagram: 40, facebook: 31 },
					},
					{
						date: '2019-05-03',
						usage: { twitter: 12, instagram: 15, facebook: 19 },
					},
					{
						date: '2019-05-04',
						usage: { twitter: 10, instagram: 56, facebook: 61 },
					},
				],
			},
			{
				username: 'sam_j_1989',
				name: 'Sam Jones',
				screenTime: [
					{
						date: '2019-06-11',
						usage: {
							mapMyRun: 0,
							whatsApp: 0,
							facebook: 0,
							safari: 10,
						},
					},
					{
						date: '2019-06-13',
						usage: {
							mapMyRun: 0,
							whatsApp: 0,
							facebook: 0,
							safari: 16,
						},
					},
					{
						date: '2019-06-14',
						usage: {
							mapMyRun: 0,
							whatsApp: 0,
							facebook: 0,
							safari: 31,
						},
					},
				],
			},
		];
		expect(getScreentimeAlertList(users, '2019-05-04')).toEqual([
			'beth_1234',
		]);
		expect(getScreentimeAlertList(users, '2019-06-14')).toEqual([]);
	});
});

describe('hexToRGB', () => {
	test('converts hex to RGB', () => {
		expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
		expect(hexToRGB('#0F0401')).toBe('rgb(15,4,1)');
	});
});

describe('findWinner', () => {
	test('for noughts and crosses return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner', () => {
		expect(
			findWinner([
				['X', '0', null],
				['X', null, '0'],
				['X', null, '0'],
			])
		).toBe('X');
		expect(
			findWinner([
				['X', '0', null],
				['X', null, '0'],
				['0', null, '0'],
			])
		).toBe(null);
		expect(
			findWinner([
				['X', '0', '0'],
				['X', null, '0'],
				[null, 'X', '0'],
			])
		).toBe('0');
	});
});
