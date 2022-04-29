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
		if(!this.chain.includes('position')) {
			this.chain.splice(position-1, 1);
		} else {
			throw new Error("You can't remove incorrect link!");
		}
		
		return this;
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

