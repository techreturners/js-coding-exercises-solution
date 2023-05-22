export function capitalize(word) {
	if (typeof word !== 'string') throw new Error('word must be a string');

	return word[0].toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');

	return `${firstName[0]}.${lastName[0]}`;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');

	return Number((originalPrice + (vatRate / 100) * originalPrice).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');

	// 💡 We could consider adding a bit more parameter checking
	//    (This kind of runtime type-checking is redundant with TypeScript but important
	//     for JavaScript)
	if (!Number.isFinite(originalPrice) || originalPrice === null)
		throw new Error('originalPrice must be numeric');
	if (!Number.isFinite(reduction) || reduction === null)
		throw new Error('reduction must be numeric');

	return Number(
		(originalPrice - (reduction / 100) * originalPrice).toFixed(2)
	);
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	return str.length % 2 === 0
		? str[str.length / 2 - 1] + str[str.length / 2]
		: str[Math.floor(str.length / 2)];
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');

	// arrays have a built in .reverse() method, so we can convert to an array and join back together after
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// let's reuse our existing work!
	return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');

	return users.filter((user) => user.type === 'Linux').length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');

	// 💡 `reduce` takes a start value (in this case, 0) and a function that
	// determines how each member of the array contributes

	const mean = scores.reduce(
		(total, score) => total + score / scores.length,
		0
	);
	return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');

	if (n % 3 === 0 && n % 5 === 0) {
		return 'fizzbuzz';
	} else if (n % 3 === 0) {
		return 'fizz';
	} else if (n % 5 === 0) {
		return 'buzz';
	} else {
		return n;
	}
}
