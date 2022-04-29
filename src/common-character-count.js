const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	getCommonCharacterCount
};

function getCommonCharacterCount(a, b) {

	let sup1 = Array.from(a);
	let sup2 = Array.from(b);
	let resultArr = [];

	for (let item of sup1) {
		if (sup2.includes(item)) {
			resultArr.push(item);
			sup2.splice(sup2.indexOf(item), 1);
		}
	}
	return resultArr.length;

	// console.log(sup1);
}
