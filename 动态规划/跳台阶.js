/**
 * 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法
 */
function JumpFloor(n) {
  if (n <= 2) {
    return n;
  }
  let total;
  let pre2 = 1;
  let pre1 = 2;
  for (let i = 2; i < n; i++) {
    total = pre2 + pre1;
    pre2 = pre1;
    pre1 = total;
  }
  return total;
}