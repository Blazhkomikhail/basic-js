const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direction = true){
    this.direct = direction;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.maxAlphabetInd = 25;
    this.numberOfLetters = 26;
  }
  encrypt(str, phrase) {
    if (str === undefined || phrase === undefined) {
      throw new Error;
    } else {
      let encryptedStr = [];
      let spaceIndexes = [];
      //get space indexes
      str.split('').forEach((elem, i) => {
        if (elem === ' ') spaceIndexes.push(i);
      });
      str = str.replace(/\s/g, '');
      //prepear phrase
      if (str.length < phrase.length) {
        phrase.split('').slice(0, -(phrase.length - str.length) ).join('');
      } else if (str.length > phrase.length * 2) {
        let factor = Math.floor(str.length / phrase.length);
        let rest = str.length % phrase.length;
        phrase = phrase.repeat(factor);
        phrase += phrase.split('').slice(0, rest).join('');
      } else {
        phrase += phrase.split('').slice(0, str.length - phrase.length).join('');
      }
      //encrypt
      str.split('').forEach( (el,i) => {
        if (/[a-zA-Z]/.test(el)) {
          const strInd = this.alphabet.indexOf(el.toLowerCase());
          const phraseInd = this.alphabet.indexOf(phrase[i].toLowerCase());
          let commonIndex = strInd + phraseInd > this.maxAlphabetInd ?
                            strInd + phraseInd - this.numberOfLetters : strInd + phraseInd;
          encryptedStr.push(this.alphabet[commonIndex].toUpperCase());
        } else {
          encryptedStr.push(el);
        }
      })
      //return spaces
      spaceIndexes.forEach( (el, i) => {
        encryptedStr.splice(spaceIndexes[i], 0, ' ');
      });
      
      return this.direct ? encryptedStr.join('') : encryptedStr.reverse().join('');
    }
  }
  
  decrypt(str, phrase) {
    if (str === undefined || phrase === undefined) {
      throw new Error;
    } else {
      let decryptedStr = [];
      let spaceIndexes = [];
      //get space indexes
      str.split('').forEach((elem, i) => {
        if (elem === ' ') spaceIndexes.push(i);
      });
      str = str.replace(/\s/g, '');
      //prepear phrase
      if (str.length < phrase.length) {
        phrase.split('').slice(0, -(phrase.length - str.length) ).join('');
      } else if (str.length > phrase.length * 2) {
        let factor = Math.floor(str.length / phrase.length);
        let rest = str.length % phrase.length;
        phrase = phrase.repeat(factor);
        phrase += phrase.split('').slice(0, rest).join('');
      } else {
        phrase += phrase.split('').slice(0, str.length - phrase.length).join('');
      }
      //decrypt
      str.split('').forEach( (el,i) => {
        if (/[a-zA-Z]/.test(el)) {
          const strInd = this.alphabet.indexOf(el.toLowerCase());
          const phraseInd = this.alphabet.indexOf(phrase[i].toLowerCase());
          let commonIndex = strInd + this.numberOfLetters - phraseInd > this.maxAlphabetInd ?
                            strInd - phraseInd : strInd + this.numberOfLetters - phraseInd;
          decryptedStr.push(this.alphabet[commonIndex].toUpperCase());
        } else {
          decryptedStr.push(el);
        }
      })
      //return spaces
      spaceIndexes.forEach( (el, i) => {
        decryptedStr.splice(spaceIndexes[i], 0, ' ');
      });
      
      return this.direct ? decryptedStr.join('') : decryptedStr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
