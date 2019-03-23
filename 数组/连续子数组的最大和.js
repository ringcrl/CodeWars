/**
 * {6, -3, -2, 7, -15, 1, 2, 2}
 * 连续子数组的最大和为 8（从第 0 个开始，到第 3 个为止）
 */
function maxSequence(nums) {
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

function maxSequence2(arr) {
  let min = 0;
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}


console.log(maxSequence([6, -3, -2, 7, -15, 1, 2, 2]));