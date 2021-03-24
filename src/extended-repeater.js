const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, 
{repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  str = String(str);
  addition = String(addition); 
  let additionWithSeparator = ''; 
  let result = '';
  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionWithSeparator += i < additionRepeatTimes - 1 ? addition + additionSeparator : addition;
    }
  }
  for (let j = 0; j < repeatTimes; j++) { 
    result += j < repeatTimes - 1 ? str + additionWithSeparator + separator : str + additionWithSeparator; 
  }
  return result;
};
  


// let additionWithSeparater = '';
// addition ? additionWithSeparater = `${addition}${additionSeparator}`.repeat(additionRepeatTimes) : addWithSeparater = '';
// let result = (str + additionWithSeparater + separator).repeat(repeatTimes);
// return result.slice(0, result.length - 1);