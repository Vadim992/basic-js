const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let set = new Set();
  for (let item of domains) {
    let arr = item.split('.').map(item => '.'+item);
    arr.reverse();
    set.add(arr[0]);
    for (let i = 0; i < arr.length; i++){
      let k = 0;
      let sum = '';
      while (k <= i) {
        sum += arr[k++];
      }
      set.add(sum);
    }
  } 
  for (let value of set) {
    let num = 0;
    let str = value.slice(1).split('.').reverse().join('.');
    for (let item of domains) {
      item.includes(str) ? num++ : null;
      
    }
    result[value] = num;
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
