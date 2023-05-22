/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	return arr.reduce(
		(total, element) =>
			element % 3 === 0 || element % 5 === 0 ? total + element : total,
		0
	);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');

	// 💡 the every method returns true if every element in an array meets the given criteria
	return [...str].every(
		(char) => char === 'C' || char === 'G' || char === 'T' || char === 'A'
	);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (!isValidDNA(str)) throw new Error('str must be a valid DNA sequence');

	const bases = str.split('');

	const complimentaryBases = {
		T: 'A',
		A: 'T',
		C: 'G',
		G: 'C',
	};
	const complimentaryDNA = bases.map((base) => complimentaryBases[base]);
	return complimentaryDNA.join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	if (!Number.isInteger(n)) return false;

	for (let i = 2, max = Math.sqrt(n); i <= max; i++)
		if (n % i === 0) return false;
	return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');

	let result = [];
	let i = n;
	// we can use the .fill() method to create an array of size n and fill it:
	while (i > 0) {
		result.push(Array(n).fill(fill));
		i--;
	}
	return result;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');

	return staff.filter((name) => name.rota.includes(day)).length >= 3;
};
