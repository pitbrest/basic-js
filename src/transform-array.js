const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	transform
};

function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	let preres = arr.slice();
	let result = [];

	for (let i = 0; i < preres.length; i++) {
		if (preres[i] === '--discard-next') {
			if (preres[i + 1]) {
				preres.splice(i + 1, 1);
			}
			console.log(result);
		} else if (preres[i] === '--discard-prev') {
			if (result.length > 0 && preres[i - 1] !== '--discard-next') {
				result.splice(i - 1, 1)
			}
			console.log(result);
		} else if (preres[i] === '--double-next') {
			if (preres[i + 1]) {
				result.push(preres[i + 1]);
			}
		} else if (preres[i] === '--double-prev') {
			if (result.length > 0 && preres[i - 1] !== '--discard-next') {
				result.push(preres[i - 1]);
			}
			console.log(result);
		} else {
			result.push(preres[i]);
			console.log(result);
		}
	}
	return result
}