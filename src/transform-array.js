const CustomError = require("../extensions/custom-error");

module.exports = function transform(matrix) {
  if ( !Array.isArray(matrix) ) new CustomError('Not implemented');
  if ( !matrix.length ) return matrix;
  const copy = [...matrix];
  let targetInd;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] === '--discard-next') {
        if (i !== copy.length - 1) {
          targetInd = i + 1;
          copy.splice(i, 2);
          i -= 2;
        } else {
          copy.splice(i, 1);
          i -= 1;
        }  
      } else if (copy[i] === '--discard-prev') {
        if (i !== 0 && targetInd - i !== 1) {
          copy.splice(i - 1, 2);
          i -= 2;
        } else {
          copy.splice(i, 1);
          i -= 1;
        }
      } else if (copy[i] === '--double-next') {
        if (i !== copy.length - 1) {
          copy.splice(i, 1, copy[i + 1]);
        } else {
          copy.splice(i, 1);
        }
      } else if (copy[i] === '--double-prev') {
        if (i !== 0 && targetInd - i !== 1) {
          copy.splice(i, 1, copy[i - 1]);
        } else {
          copy.splice(i, 1);
          i -= 1;
        }
      } 
    }
  return copy;
}