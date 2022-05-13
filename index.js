// 1. Please write a function that shows the usage of closures

function outer() {
	const outerVariable = "World";
	function inner() {
		return `Hello ${outerVariable}`;
	}
	return inner();
}

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

function sumOfArray(array) {
	return array.reduce((sum, item) => {
		return sum + item;
	}, 0);
}

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
function flattenArray(array) {
	let hasArrayInside = false;
	array.forEach((item) => {
		if (item instanceof Array) {
			hasArrayInside = true;
		}
	});
	if (!hasArrayInside) {
		return array;
	} else {
		return flattenArray(array.flat());
	}
}

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function findCommonElementsInArray(arr1, arr2) {
	// Alternative way to find all common elements
	// I prefer using filter method because it's cleaner and easier to read
	// let filteredArray = [];
	// arr1.forEach((elem1) => {
	// 	if (arr2.find((elem2) => elem2 === elem1)) filteredArray.push(elem1);
	// });
	// return filteredArray;

	return arr1.filter((elem1) => {
		return arr2.find((elem2) => elem2 === elem1);
	});
}

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function findDifferentElementsInArray(arr1, arr2) {
	// TO DO

	// const differentElements1 = arr1.filter((elem1) => {
	// 	return arr2.find((elem2) => elem2 !== elem1);
	// });
	// const differentElements2 = arr2.filter((elem2) => {
	// 	return arr1.find((elem1) => elem1 !== elem2);
	// });
	// return [...differentElements1, ...differentElements2];
	let filteredArray = [];
	arr1.forEach((elem1) => {
		if (!arr2.find((elem2) => elem2 === elem1)) filteredArray.push(elem1);
	});
	arr2.forEach((elem2) => {
		if (!arr1.find((elem1) => elem1 === elem2)) filteredArray.push(elem2);
	});
	return filteredArray;
}
// console.log(
// 	findDifferentElementsInArray(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
// );

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function createArrayOfTuples(arr1, arr2) {
	let arrayOfTuples = [];
	arr1.forEach((item, index) => {
		if (arr2[index] === undefined) return;
		arrayOfTuples.push([item, arr2[index]]);
	});
	return arrayOfTuples;
}

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

function getPathValueFromObject(path, object) {
	return path.reduce((newobj, step) => {
		return newobj[step];
	}, object);
}

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function isEqual(obj1, obj2) {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	let equal = true;
	keys1.forEach((key) => {
		if (obj1[key] !== obj2[key]) {
			equal = false;
		}
	});
	return equal;
}
console.log(
	isEqual({ a: "b", c: "d" }, { c: "d", a: "b" }),
	isEqual({ a: "b", c: "d" }, { c: "d", a: "b" }),
	isEqual({ a: "b", c: "d" }, { c: "d", a: "w" }),
	isEqual({ a: "b", c: "d" }, { c: "d", u: "b" }),
	isEqual({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" })
);

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function getObjectWithoutKeys(keys, object) {
	let objectWithoutKeys = object;
	keys.forEach((key) => {
		delete objectWithoutKeys[key];
	});
	return objectWithoutKeys;
}
