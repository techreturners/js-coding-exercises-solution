export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.reduce(
		(result, current) =>
			result + current[0].toUpperCase() + current.slice(1)
	);
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	return people.reduce((total, person) => total + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');

	const appearsInBoth = arr1.filter((value) => arr2.includes(value));
	// 💡 a Set is like an array but it automatically removes duplicates
	const noDuplicates = new Set(appearsInBoth);
	// convert back to an array and sort
	return Array.from(noDuplicates).sort((a, b) => a - b);
}
