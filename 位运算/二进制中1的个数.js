/**
 * 输入一个整数，输出该数二进制表示中 1 的个数
 */
function numberOf1(n) {
  let cnt = 0;
  while (n !== 0) {
    cnt++;
    n &= (n - 1);
  }
  return cnt;
}

console.log(numberOf1(10));
// (10).toString(2) 1010