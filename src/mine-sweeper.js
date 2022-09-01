const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      num = 0;
           for(let vert = i-1; vert <= i+1; vert++) {
             if (vert < 0 || vert === matrix.length ) continue;
             console.log('vert',vert);
              for (let gor = j - 1; gor <= j+1; gor++) {
                if (gor < 0 || gor === matrix[i].length ) continue;
                if ( vert === i && gor === j) continue;
                matrix[vert][gor] === true ? num++ : null;
                }
              }
        result[i][j] = num;
           }
    } 
  return result;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
