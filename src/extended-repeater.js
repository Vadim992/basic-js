const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = ['repeatTimes', 'separator', 'addition', 'additionRepeatTimes', 'additionSeparator'];
  let optionsArr = Object.keys(options);
  
 for (let key of optionsArr) {
   for (let item of arr) {
      if (optionsArr.includes(item)) {
        null;
      } else {
        switch(item){
          case arr[1]:
           options[item] = '+';
           break;
          case arr[2]:
           options[item] = '';
           break;
          case arr[3]:
           options[item] = 1;
           break;
          case arr[4]:
           options[item] = '|';
           break;
          default:
            options[item] = 1;      
      }
      
    } 
  }
}
  
     let word = ((String(str) +  (String(options.addition) + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length) + options.separator).repeat(options.repeatTimes))
  word = word.slice(0,-options.separator.length);
  if (options.addition === '' || options.additionRepeatTimes === 1) {
    word = word.split('').filter( item => item !== options.additionSeparator).join('');
  }
  return word;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
