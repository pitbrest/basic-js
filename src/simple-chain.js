const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		if(arguments.length > 0) {
			this.chain.push(`( ${value} )`);
		} else {
			this.chain.push('( )');
		}
		return this;
	},
	removeLink(position) {
		if(position <= 0 || typeof position === 'string' || !this.chain[position-1]) {
			this.chain = [];
			throw new Error('You can\'t remove incorrect link!');
		}
		if (this.chain[position-1]) {
			this.chain.splice(position-1, 1);
			return this;
		} else {
			this.chain = [];
			throw new Error('You can\'t remove incorrect link!');
		}					
	},
	reverseChain() {
		this.chain.reverse();
		return this
	},
	finishChain() {
		const result = this.chain.join('~~');
		this.chain = [];
		return result;
	}
};

module.exports = {
	chainMaker
};

