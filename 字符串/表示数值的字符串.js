/**
 * true
 * "+100"
 * "5e2"
 * "-123"
 * "3.1416"
 * "-1E-16"
 * 
 * false
 * "12e"
 * "1a3.14"
 * "1.2.3"
 * "+-5"
 * "12e+4.3"
 * 
 * 使用正则表达式进行匹配
 */
function isNumeric(str) {
  if (str === null || str === '') {
    return false;
  }
  return /[+-]?\\d*(\\.\\d+)?([eE][+-]?\\d+)?/.test(str);
}