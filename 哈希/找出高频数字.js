/**
  已知⼀一个 int 数组，数组中每个数字出现的频率都不不相同，实现⼀个 topKFrequent 函数返回
  该数组中频率前 K ⾼高的数字。

  例例⼦子1:
  let nums = [1,1,1,2,2,3], k = 3;
  topKFrequent(nums, k); // 输出为:[1,2,3]
  例例⼦子2:
  let nums = [1,1,2,2,2,3], k = 2;
  topKFrequent(nums, k); // 输出为:[2,1] // 例例⼦子3
  let nums = [1,1,1,2,2,3,3,3,3], k = 1;
  console.log(topKFrequent(nums, k)); // 输出为:[3]
 */
function topKFrequent(nums, k) {
  const numberMap = nums.reduce((prev, curr) => {
    prev[curr] ? (prev[curr] += 1) : (prev[curr] = 1);
    return prev;
  }, {});

  const values = Object.entries(numberMap);
  const valuesSorted = values.sort((a, b) => {
    return b[1] - a[1];
  });
  return valuesSorted.slice(0, k).map((item) => {
    return item[0];
  });
}
