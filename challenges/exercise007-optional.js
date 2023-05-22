export const sumDigits = (n) => {
	if (n === undefined) throw new Error('n is required');
	return Number(
		n
			.toString()
			.split('')
			// we check if it's a number to allow decimals too, e.g. "3.5" would sum to "8"
			.reduce((acc, val) => (isNaN(val) ? acc : acc + Number(val)), 0)
	);
};

export const createRange = (start, end, step = 1) => {
	if (start === undefined) throw new Error('start is required');
	if (end === undefined) throw new Error('end is required');
	const result = [];
	let i = start;
	while (i <= end) {
		result.push(i);
		i += step;
	}
	return result;
};

export const getScreentimeAlertList = (users, date) => {
	if (users === undefined) throw new Error('users is required');
	if (date === undefined) throw new Error('date is required');

	const MAX_SCREEN_MINUTES = 100;

	let usersToAlert = [];

	for (let i = 0; i < users.length; i++) {
		users[i].screenTime.map((user) =>
			user.date === date &&
			Object.values(user.usage).reduce((a, b) => a + b) >
				MAX_SCREEN_MINUTES
				? usersToAlert.push(users[i].username)
				: null
		);
	}
	return usersToAlert;
};

function isHexDigit(d) {
	// we could use a regular expression, perhaps!
	return [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	].includes(d);
}

export const hexToRGB = (hexStr) => {
	if (hexStr === undefined) throw new Error('hexStr is required');

	if (hexStr.length !== 7 || hexStr[0] !== '#')
		throw new Error('hexStr must be a valid hex string');

	const hexDigits = hexStr.split('').slice(1);

	if (hexDigits.some((char) => !isHexDigit(char))) {
		throw new Error('hexStr must be a valid hex string');
	}
	return `rgb(${parseInt(hexStr.slice(1, 3), 16)},${parseInt(
		hexStr.slice(3, 5),
		16
	)},${parseInt(hexStr.slice(5, 7), 16)})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error('board is required');
	if (board === undefined) throw new Error('board is required');
	let temp;
	//diagonal 1
	for (let i = 0; i < board.length; i++) {
		temp = board[i][0];
		if (temp === null) break;
		if (board[i][i] !== temp) break;
		if (i === 2 && board[i][i] === temp) return temp;
	}
	//diagonal 2
	for (let i = 0, y = 2; i < board.length; i++, y--) {
		temp = board[i][2];
		if (temp === null) break;
		if (board[i][y] !== temp) break;
		if (i === 2 && board[i][y] === temp) return temp;
	}
	//rows
	for (let i = 0; i < board.length; i++) {
		temp = board[i][0];
		for (let j = 0; j < board.length; j++) {
			if (temp === null) break;
			if (board[i][j] !== temp) break;
			if (j === 2 && board[i][j] === temp) return temp;
		}
	}
	//columns
	for (let i = 0; i < board.length; i++) {
		temp = board[0][i];
		for (let j = 0; j < board.length; j++) {
			if (temp === null) break;
			if (board[j][i] !== temp) break;
			if (j === 2 && board[j][i] === temp) return temp;
		}
	}
	return null;
};
