const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(mas) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  mas.forEach( item => item === -1 ? null : arr.push(item));
  arr = arr.sort((a,b) => a - b);
  for (let i = mas.length - 1; i >= 0; i--) {
       if (mas[i] !== -1) {
        mas[i] = arr[arr.length-1];
        arr.pop();
       }
  }
  return mas;
}

module.exports = {
  sortByHeight
};
