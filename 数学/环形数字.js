/**
 * 给定一个 n 和 firstNumber
 * 从 0 到 n - 1 组成一个圆环
 * 找出 firstNumber 的对面的那个数字
 */
function circleOfNumbers(n, firstNumber) {
  const half = n / 2;
  return firstNumber >= half ?
    firstNumber - half :
    firstNumber + half;
}

console.log(circleOfNumbers(10, 2)); // 7