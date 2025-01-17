const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

function repeater(str, options) {
	if(str && typeof str !== 'string' || str === null) {
		str = String(str);
	}
	if(options.addition === false || options.addition === null || options.addition && typeof options.addition !== 'string') {
		options.addition = String(options.addition);
	}	

	let arr = [];

	if(options.repeatTimes && options.separator && options.addition && options.additionRepeatTimes && options.additionSeparator) {
		
		let supArr = [];
		for(let i=0; i<options.additionRepeatTimes; i++) {
			supArr.push(options.addition);			
		}
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + supArr.join(options.additionSeparator));			
		}
		return arr.join(options.separator);
	}

// repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 
	if(options.repeatTimes  && options.separator && options.addition && options.additionRepeatTimes && !options.additionSeparator) {
		
		let supArr = [];
		for(let i=0; i<options.additionRepeatTimes; i++) {
			supArr.push(options.addition);			
		}
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + supArr.join('|'));			
		}
		return arr.join(options.separator);		
	}
	if(options.repeatTimes && options.addition && options.additionRepeatTimes && options.additionSeparator && !options.separator) {
		
		let supArr = [];
		for(let i=0; i<options.additionRepeatTimes; i++) {
			supArr.push(options.addition);			
		}
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + supArr.join(options.additionSeparator));			
		}
		return arr.join('+');		
	}
	if(options.repeatTimes && options.addition && options.additionRepeatTimes && !options.additionSeparator ) {
		
		let supArr = [];
		for(let i=0; i<options.additionRepeatTimes; i++) {
			supArr.push(options.addition);			
		}
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + supArr.join('|'));			
		}
		return arr.join('+');		
	}
	if(options.separator && options.additionSeparator && options.addition && !options.repeatTimes) {
		return str + options.addition;
	}
	if(options.repeatTimes && options.separator && options.addition) {
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + options.addition);			
		}
		return arr.join(options.separator);
	}

	if(options.repeatTimes && options.separator) {
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str);			
		}
		return arr.join(options.separator);
	}
	if(options.repeatTimes && options.addition) {
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str + options.addition);			
		}
		return arr.join('+');
	}
	if(options.repeatTimes) {
		for(let i=0; i<options.repeatTimes; i++) {
			arr.push(str);
		}
		return arr.join('+');
	}	
}

