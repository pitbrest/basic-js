const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
	throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
}

module.exports = {
	dateSample
};



function dateSample(sampleActivity) {

	if (!Number(sampleActivity) || typeof sampleActivity !== 'string' || Number(sampleActivity) < 0) {
		return false;
	}

	let sup1 = 15 / Number(sampleActivity);
	let sup2 = 0.693 / 5730;
	let result = Math.log(sup1) / sup2;

	if (result < 0) { return false }

	return Math.ceil(result);
}