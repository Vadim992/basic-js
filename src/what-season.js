const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  console.log(date);
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString') || date.constructor !== Date || typeof(date) !== 'object' || Date.now() - date.getTime() === 0) throw new Error('Invalid date!');

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let seasonObj = {
    'winter' : [],
    'spring' : [],
    'summer' : [],
    'autumn' : [],
  }
  for (let key in seasonObj) {
    if (seasonObj[key].includes(date.getMonth())) return key;
  }
  for (let i = 0 ; i <=11 ; i++) {
      if (i <= 1 || i === 11) seasonObj['winter'].push(i);
      if (i > 1 && i<=4) seasonObj['spring'].push(i);
      if (i > 4 && i <=7 ) seasonObj['summer'].push(i);
      if (i >7 && i < 11) seasonObj['autumn'].push(i);
  }
  for (let key in seasonObj) {
    if (seasonObj[key].includes(date.getMonth())) return key;
  }
}

module.exports = {
  getSeason
};
