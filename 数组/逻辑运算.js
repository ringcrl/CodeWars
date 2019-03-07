/**
 * https://www.codewars.com/kata/logical-calculator/train/javascript
 * 
 * 逻辑运算
 * - 有点像 Ramda 模式
 * 
 * @param {array} array 
 * @param {'AND'|'OR'|'XOR'} op 
 */
function logicalCalc(array, op){
  const ops = {
    'AND': function (a, b) { return a && b; },
    'OR': function (a, b) { return a || b; },
    'XOR': function (a, b) { return a !== b; },
  }
  
  return array.reduce(ops[op]);
}