/**
 * {6, -3, -2, 7, -15, 1, 2, 2}
 * 连续子数组的最大和为 8（从第 0 个开始，到第 3 个为止）
 */
function FindGreatestSumOfSubArray(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let greatestSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (const num of nums) {
    sum = sum <= 0 ? num : num + sum;
    greatestSum = Math.max(greatestSum, sum);
  }

  return greatestSum;
}

console.log(FindGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]));