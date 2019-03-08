/**
 * 一个整型数组里除了一个数字之外，其他的数字都出现了两次，找出这两个数
 * 
 * 1. 两个相同的数字 ^ 结果是 0
 * 2. 0 ^ n 结果是 n
 * 3. n ^ m ^ n 结果是 m
 */
const singleNumber = function (nums) {
  let diff = nums.reduce((prev, curr) => {
    return prev ^= curr;
  });
  return diff;
};

console.log(singleNumber([4, 1, 2, 1, 2]));