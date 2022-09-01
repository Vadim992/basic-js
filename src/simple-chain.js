const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    value === undefined ? value = "( )" : value = `( ${value} )`;
    this.arr.push(value);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
   if ( typeof(position) !== 'number' || position < 1 || position > this.arr.length || position % 1 !==0) {
    this.arr = [];
    throw new Error('You can\'t remove incorrect link!');
   } 
    this.arr.splice(position - 1,1);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
   this.arr = this.arr.reverse();
   return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};


module.exports = {
  chainMaker
};
