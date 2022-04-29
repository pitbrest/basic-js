const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	deleteDigit
};


function deleteDigit(x) {

	let sup1 = x.toString();
	let sup2 = [];

	for (let i = 0; i < sup1.length; i++) {
		if (i === 0) {
			sup2.push(sup1.slice(i + 1));
		}
		else if (i === sup1.length - 1) {
			sup2.push(sup1.slice(0, sup1.length - 1))
		}
		else {
			sup2.push(sup1.slice(0, i) + sup1.slice(i + 1))
		}

	}
	return Math.max(...sup2.map(item => +item).sort((a, b) => a - b));
}