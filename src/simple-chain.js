const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chain' : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!arguments) {
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )~~`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] !== undefined) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[this.chain.length -1] = this.chain[this.chain.length -1].split('').slice(0, -2).join('');
    let tempChain = [...this.chain];
    this.chain = [];
    return tempChain.join('');
  }
};

module.exports = chainMaker;
