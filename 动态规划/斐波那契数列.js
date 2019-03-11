/**
 * 求斐波那契数列的第 n 项，n <= 39
 * 
 * 递归是将一个问题划分成多个子问题求解，动态规划也是如此，
 * 但是动态规划会把子问题的解缓存起来，从而避免重复求解子问题
 */
function fibonacci(n) {
  if (n <= 1) { return n; }
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}