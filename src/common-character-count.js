const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s1.length === 0) return 0;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  s1 === s2 ? count++ : null;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  
  if (arr1.length - arr2.length <= 0) {
    getCount(arr1,arr2);
  } else {
    getCount(arr2,arr1);
  }
  function getCount(lower, bigger) {
    let i = 1;
    let j =1;
    let mas = [];
    let n1 = lower.join('');
    let n2 = bigger.join('');
    while (lower.length >= 1 ){
      while (bigger.length > 1) {
      const set1 = new Set(lower);
      const set2 = new Set(bigger);

      for (let value1 of set1) {
        for (let value2 of set2) {
          if (value1 === value2) {
            if (! mas.includes(value1)) {
              count++;
              mas.push(value1);
            }
          }
      }
    };
    j++;
    bigger = [];

    let end2 = j;
    let begin2 = 0;
    while (begin2 <= n2.length - 1){
      bigger.push(n2.slice(begin2,end2));
      begin2 = end2;
      end2 += end2;
     }
    }
    i++;
    if (lower.length === 1) {
      lower = [];
    }  else {
    j = 1;
    lower = [];
    bigger = n2.split('');
    let end1 = i;
    let begin1 = 0
     while (begin1 <= n1.length - 1){
      lower.push(n1.slice(begin1,end1));
      begin1 = end1;
      end1 += end1;
     }
    }
    }
     
  }
  return count;
}


module.exports = {
  getCommonCharacterCount
};
