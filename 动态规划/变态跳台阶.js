/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级
 * 它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 * 
 * 1. 跳上 n-1 级台阶，可以从 n-2 级跳 1 级上去，也可以从 n-3 级跳 2 级上去
 *    f(n-1) = f(n-2) + f(n-3) + ... + f(0)
 * 2. 跳上 n 级台阶，可以从 n-1 级跳 1 级上去，也可以从 n-2 级跳 2 级上去.
 *    f(n) = f(n-1) + f(n-2) + ... + f(0)
 * 3. f(n) - f(n-1) = f(n-1) => f(n) = 2*f(n-1)
 */

function JumpFloorII(target) {
  const dp = new Array(target).fill(1);
  for (let i = 1; i < target; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j];
    }
  }
  return dp[target - 1];
}