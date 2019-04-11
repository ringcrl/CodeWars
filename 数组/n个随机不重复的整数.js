/**
 * 函数 uniqueNums，该函数有两个参数 `range:[min, max]`, n
 * 其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 range
 */
const uniqueNums = (range, n) => {
  const len = range[1] - range[0] + 1;
  return Array(len).fill(0)
    .map((_, i) => i + range[0])
    .sort(() => Math.random() - Math.random())
    .slice(0, n);
};

console.log(uniqueNums([5, 20], 5));