
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let temp = 0;
    for (let item of arr) {
      if (Array.isArray(item)){
        temp = this.calculateDepth(item);
        if (temp > depth) {
          depth = temp;
        }
      }
    }
    return depth + 1;
  }
};