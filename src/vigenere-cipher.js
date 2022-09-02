const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(name) { 
    this.name = name;   
  }
   getMatrix() {
    let i = 0;
    let matrix = [];
    while (i < 26) {
      matrix[i] = [];
      let was = true;
      let k =0;
      for (let j = 0; j < 26; j++) {
        if (matrix[i].length > 26) break;
        if (j+i > 25 && was)  {
          was = false;
          k = 0;
        } else if (was){
          k = j + i;
        }
        matrix[i][j] = String.fromCodePoint(k+65);
        k++;
      }
      i++;
    }
    return matrix;
  }
  encrypt(message, key) {
    if (arguments.length < 2) throw new Error('Incorrect arguments!');
    for (let args of arguments) {
      if (!args)  throw new Error('Incorrect arguments!');
    }
     const matrix = this.getMatrix();
     let arr = message.toUpperCase().split(' ');
     let  word = arr.join('');
     let fullKey = key.toUpperCase();
    let i = 0;
     while ( fullKey.length < word.length) {

       fullKey += key[i].toUpperCase();
       i++;
       (i > key.length - 1) ? i = 0 : null;
     }

     let result = '';
     for (let i = 0; i < word.length; i++) {
       if( !matrix[0].includes(word[i])) {
        result += word[i];
        continue;
       }
       let gor = matrix[0].indexOf(word[i]);
       let vert = matrix[0].indexOf(fullKey[i]);
       result += matrix[gor][vert];
     }
     let begin = 0;
     for (let i = 0; i < arr.length; i++) {
          i === 0 ? arr[i] = result.slice(begin,arr[i].length)  : arr[i] = result.slice(begin,begin+ arr[i].length)
       begin += arr[i].length;
     } 
     if (this.name === false) {
      result = arr.join(' ').split('').reverse().join('');
     } else {
      result = arr.join(' ');
     }
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) throw new Error('Incorrect arguments!');
    for (let args of arguments) {
      if (!args)  throw new Error('Incorrect arguments!');
    }
    const matrix = this.getMatrix();
   let arr = encryptedMessage.split(' ');
   let  word = arr.join('');
   let fullKey = key.toUpperCase();
  let i = 0;

   while ( fullKey.length < word.length) {

     fullKey += key[i].toUpperCase();
     i++;
     (i > key.length - 1) ? i = 0 : null;
   }

   let result = '';
   for (let i = 0; i < fullKey.length; i++) {
     if( !matrix[0].includes(word[i])) {
      result += word[i];
      continue;
     }
     let gor = matrix[0].indexOf(fullKey[i]);
     let vert = 0;
     for (let j = 0; j < matrix.length; j++) {
         if (matrix[j][gor] === word[i]) {
             vert = j
         } 
     }
     result += matrix[vert][0];
   }
   let begin = 0;
   for (let i = 0; i < arr.length; i++) {
        i === 0 ? arr[i] = result.slice(begin,arr[i].length)  : arr[i] = result.slice(begin,begin+ arr[i].length)
     begin += arr[i].length;
   } 
   if (this.name === false) {
     result = arr.join(' ').split('').reverse().join('');
   } else {
    result = arr.join(' ');
   }
  return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
