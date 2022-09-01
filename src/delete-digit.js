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
function deleteDigit(n) {
  const str = String(n);
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let arr = str.split('');
    arr.splice(i,1);
    let num = Number(arr.join(''));
    num > max ? max = num : null;
  }
  return max;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
