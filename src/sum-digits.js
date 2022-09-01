const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (String(number).length > 1) {
    while (String(number).length > 1) {
      let result = String(number).split('').reduce((sum,current) => sum + Number(current), 0);
      number = result;
    }
  }
  return number;
}

module.exports = {
  getSumOfDigits
};
