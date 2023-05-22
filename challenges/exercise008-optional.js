export function printColours(colours) {
	if (!colours) throw new Error('colour is required');
	return [...colours];
}

export function shoppingList(list, newItem) {
	if (!list) throw new Error('list is required');
	if (!newItem) throw new Error('newItem is required');
	return [...list, ...newItem];
}

export function highestNumber(numbers) {
	if (!numbers) throw new Error('numbers are required');
	return numbers.sort((a, b) => b - a)[0];
}

export function splitThatString(string) {
	if (!string) throw new Error('string is required');
	return [...string];
}

export function addressLookUp(user) {
	if (!user) throw new Error('user is required');
	return user?.address?.postcode;
}
