export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('sandwich is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	// 💡 Naming this variable aids code readability and variable reuse
	const PEOPLE_PER_BUS = 40;

	return Math.ceil(people / PEOPLE_PER_BUS);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	return arr.filter((animal) => animal.toLowerCase() === 'sheep').length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');

	// if the postcode starts with M and then has a number we can assume it's a Manchester postcode
	return (
		person.address?.postCode.startsWith('M') &&
		/[0-9]/.test(person.address.postCode[1])
	);
}
