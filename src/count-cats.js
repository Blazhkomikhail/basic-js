const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(element => {
    result += element.reduce( (sum, num) => {
      return sum + Number(num === '^^');
    },0);
  });
  return result;
};
