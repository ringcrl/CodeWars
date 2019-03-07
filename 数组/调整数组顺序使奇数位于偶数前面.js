/**
 * 调整数组顺序使奇数位于偶数前面
 * 需要保证偶数和偶数之间的相对位置不变
 */
function reOrderArray(nums) {
  // 奇数个数
  let oddCount = 0;
  for (const num of nums) {
    if (num % 2 === 1) {
      oddCount++;
    }
  }

  let i = 0;
  let k = 0;
  j = oddCount;
  const res = [];
  while (k < nums.length) {
    const num = nums[k];
    if (num % 2 === 1) {
      res[i++] = num;
    } else {
      res[j++] = num;
    }
    k++;
  }

  return res;
}

console.log(reOrderArray([1, 2, 3, 4, 5]));