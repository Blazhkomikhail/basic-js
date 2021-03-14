const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ( !date ) return 'Unable to determine the time of year!';
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn',
  'autumn', 'autumn', 'winter'];
  if ( !isNaN(date.getTime()) ) new Error('TROWN');
  return Object.prototype.toString.call(date) !== '[object.Date]' ? seasons[date.getMonth()] : new Error('Not implemented');
};
