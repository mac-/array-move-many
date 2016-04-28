var assert = require('assert');
var move = require('../index');
var getData = function() { return ['a', 'b', 'c', 'd', 'e', 'f']; };

describe('array-move-many', function() {
	it('moves a single item to a higher index', function() {
		var test = getData();
		var actual = move(test, 0, 1, 3);
		var expected = ['b', 'c', 'd', 'a', 'e', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves multiple items to a higher index', function() {
		var test = getData();
		var actual = move(test, 0, 2, 3);
		var expected = ['c', 'd', 'e', 'a', 'b', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves multiple items to the end', function() {
		var test = getData();
		var actual = move(test, 0, 3, 5);
		var expected = ['d', 'e', 'f', 'a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves nothing when entire array is selected', function() {
		var test = getData();
		var actual = move(test, 0, 6, 3);
		var expected = ['a', 'b', 'c', 'd', 'e', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves nothing when no items in the array are selected', function() {
		var test = getData();
		var actual = move(test, 0, 0, 3);
		var expected = ['a', 'b', 'c', 'd', 'e', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves only the maximum amount of items', function() {
		var test = getData();
		var actual = move(test, 5, 2, 0);
		var expected = ['f', 'a', 'b', 'c', 'd', 'e'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves a single item to a lower index', function() {
		var test = getData();
		var actual = move(test, 3, 1, 0);
		var expected = ['d', 'a', 'b', 'c', 'e', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('moves multiple items to a lower index', function() {
		var test = getData();
		var actual = move(test, 3, 2, 0);
		var expected = ['d', 'e', 'a', 'b', 'c', 'f'];
		assert.deepEqual(actual, expected);
	});
	
	it('throws with invalid parameters', function() {
		assert.throws(move.bind(null, 'invalid', 0, 1, 2));
		assert.throws(move.bind(null, [], 'invalid', 1, 2));
		assert.throws(move.bind(null, [], 0, 'invalid', 2));
		assert.throws(move.bind(null, [], 0, 1, 'invalid'));
	});
});
