export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const nIndex = nums.indexOf(n);
	return nIndex > -1 && nIndex < nums.length - 1 ? nums[nIndex + 1] : null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	let totals = { 1: 0, 0: 0 };

	[...str].forEach((num) => (num === '1' ? totals[1]++ : totals[0]++));

	return totals;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	const digits = n.toString().split('').reverse().join('');
	return parseInt(digits);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// use .flat() to turn an array-of-arrays into a single array
	const flattenedInput = arrs.flat();

	// sum up each element
	return flattenedInput.reduce((total, element) => total + element);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	return arr.length === 1
		? arr
		: [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	for (let key in haystack) {
		if (
			haystack[key]
				.toString()
				.toUpperCase()
				.includes(searchTerm.toUpperCase())
		)
			return true;
	}
	return false;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	const wordsArr = str.split(' ');
	const lowCaseWords = wordsArr.map((word) =>
		word.toLowerCase().replace(/[^a-zA-Z ]/g, '')
	);
	const wordFreq = lowCaseWords.reduce((acc, curr) => {
		let currCount = 0;
		if (acc[curr] !== undefined) {
			currCount = acc[curr];
		}
		return {
			...acc,
			[curr]: currCount + 1,
		};
	}, {});
	return wordFreq;
};
