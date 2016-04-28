module.exports = function moveMany(array, fromIndex, count, toIndex) {
	if (!array || !(array instanceof Array)) {
		throw new Error('Invalid or missing parameters: array');
	}
	if (typeof fromIndex !== 'number') {
		throw new Error('Invalid or missing parameters: fromIndex');
	}
	if (typeof count !== 'number') {
		throw new Error('Invalid or missing parameters: count');
	}
	if (typeof toIndex !== 'number') {
		throw new Error('Invalid or missing parameters: toIndex');
	}
	fromIndex = Math.max(fromIndex, 0);
	count = Math.min(count, array.length - fromIndex);
	toIndex = Math.min(toIndex, array.length - 1);

	var preItems = array.slice(0, fromIndex);
	var itemsToMove = array.slice(fromIndex, fromIndex + count);
	var postItems = array.slice(fromIndex + count);
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (i < toIndex || i >= toIndex + count) {
			if (preItems.length) {
				newArray.push(preItems.shift());
			}
			else {
				if (!postItems.length) {
					newArray.push(itemsToMove.shift());
				}
				else {
					newArray.push(postItems.shift());
				}
			}
		}
		else {
			newArray.push(itemsToMove.shift());
		}
	}
	return newArray;
};