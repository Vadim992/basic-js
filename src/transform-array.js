const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (! Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = [];
  let discard = false;
  let double = false;
  arr.forEach((item, ind) => {
    switch(item) {
      case '--discard-next':
        discard = true;
        break;
      case '--discard-prev':
        res.pop();
        break;
      case '--double-next':
        double = true;
        break;
      case '--double-prev':
        ind !== 0 ? res.push(res[res.length - 1]) : null;
        break;
       default : 
        if (discard) {
          discard = false;
          res.push('');
        } else if (double) {
          double = false;
          res.push(item);
          res.push(item);
        } else {
          res.push(item);
        }
    }
  })
  let result = [];
  res.forEach(item => {
    item !== '' ? result.push(item) : null;
  })
return result;
}

module.exports = {
  transform
};
